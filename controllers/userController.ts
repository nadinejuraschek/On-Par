import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import dayjs from 'dayjs';
import db from '../models/db';
import jwt from 'jsonwebtoken';
import { isValidUser } from '../utils/isValidUser';

// READ
const getUser = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const user = await db.User.findById(req.user);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const userInfo = {
      _id: user._id,
      birthday: user.birthday,
      country: user.country,
      email: user.email,
      endDate: user.endDate,
      familyID: user.familyID,
      firstname: user.firstname,
      lastname: user.lastname,
      location: user.location,
      permissions: user.permissions,
      profileImage: user.profileImage,
      role: user.role,
      startDate: user.startDate,
    };

    return res.status(200).json(userInfo);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const user = await db.User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const userInfo = {
      _id: user._id,
      birthday: user.birthday,
      country: user.country,
      email: user.email,
      endDate: user.endDate,
      familyID: user.familyID,
      firstname: user.firstname,
      lastname: user.lastname,
      location: user.location,
      permissions: user.permissions,
      role: user.role,
      startDate: user.startDate,
    };

    return res.status(200).json(userInfo);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const registerUser = async (req: Request, res: Response) => {
  try {
    // hash the password
    const password = await bcrypt.hash(req.body.password, 10);

    // create user in database
    const user = await db.User.create({
      birthday: req.body.birthday,
      role: req.body.role,
      familyID: Math.floor(Math.random() * 90000) + 10000,
      firstname: req.body.firstname.trim(),
      lastname: req.body.lastname.trim(),
      country: req.body.country,
      startDate: req.body.startDate,
      endDate: dayjs(req.body.startDate).add(1, 'years').toDate(),
      email: req.body.email.toLowerCase(),
      password: password,
      permissions: {
        shareBirthday: false,
        shareEmail: false,
        shareLastName: false,
      },
    });

    if (!user) {
      return res.status(500).json('Error when creating user in DB.');
    }

    const endOfWeekStartDate = dayjs(new Date(req.body.startDate)).endOf("week");

    // create empty payment entries for the whole year
    const createPaymentEntries = () => {
      return Array.from({ length: 52 }, (_, i) => ({
        amount: null,
        paid: false,
        late: false,
        date: endOfWeekStartDate.add(i + 1, 'week'),
        week: i + 1,
      }));
    };

    const insertedPayment = await db.Payment.insertMany(createPaymentEntries());
    const paymentIds = insertedPayment.map((payment) => payment._id);

    await db.User.findByIdAndUpdate(
      user._id,
      { $push: { payments: paymentIds } }
    );

    // create cookie for user (only after successful registration)
    const token = jwt.sign({ id: user._id }, process.env.APP_SECRET || '');
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });

    return res.status(200).json(user._id);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await db.User.findOne({ email: req.body.email.trim() });
    if (!user) {
      return res.status(401).json({ message: 'No User found.' });
    }

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(401).json({ message: 'Entered e-mail and password do not match!' });
    }

    const token = jwt.sign({ id: user._id }, process.env.APP_SECRET || '');
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    return res.status(200).json(user._id);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const signoutUser = (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json('User is signed out.');
};

// UPDATE
const updateUser = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body);

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json('User has been updated successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteUser = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  /* if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  } */

  try {
    const deletedUser = await db.User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json('User has been deleted successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const userController = {
  loginUser,
  deleteUser,
  getUser,
  getUserById,
  registerUser,
  signoutUser,
  updateUser,
};
