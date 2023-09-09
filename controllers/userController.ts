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

  await db.User.findById(req.user)
    .then(user => {
      const userInfo = {
        _id: user?._id,
        birthday: user?.birthday,
        country: user?.country,
        email: user?.email,
        endDate: user?.endDate,
        familyID: user?.familyID,
        firstname: user?.firstname,
        lastname: user?.lastname,
        location: user?.location,
        permissions: user?.permissions,
        profileImage: user?.profileImage,
        role: user?.role,
        startDate: user?.startDate,
      };
      res.status(200).json(userInfo);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

const getUserById = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  await db.User.findById({ _id: req.params.id })
    .then(user => {
      const userInfo = {
        _id: user?._id,
        birthday: user?.birthday,
        country: user?.country,
        email: user?.email,
        endDate: user?.endDate,
        familyID: user?.familyID,
        firstname: user?.firstname,
        lastname: user?.lastname,
        location: user?.location,
        permissions: user?.permissions,
        role: user?.role,
        startDate: user?.startDate,
      };

      res.status(200).json(userInfo);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

const registerUser = async (req: Request, res: Response) => {
  // has the password
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
    return res.status(500).json('Error when creaing user in DB.');
  }

  let errors: string[] = [];

  // create cookie for user
  const token = jwt.sign({ id: user._id }, process.env.APP_SECRET || '');
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
  });

  // create empty payment entries for the whole year
  const createPaymentEntries = () => {
    return Array(52).fill({
      paid: false,
      date: null,
      late: false,
    }).map((entry, i) => ({...entry, week: i + 1}));
  };

  db.Payment.insertMany(createPaymentEntries())
    .then(insertedPayment => {
      const paymentIds = insertedPayment.map((payment) => payment._id);
      db.User.findByIdAndUpdate(
        { _id: user._id },
        { $push: { payments: paymentIds } })
        .catch((err) => errors.push(err.message));
    })
    .catch((err) => errors.push(err.message));

  if (errors.length > 0) {
    return res.status(500).json({ error: errors.join(', ') });
  }

  res.status(200).json(user._id);
};

const loginUser = async (req: Request, res: Response) => {
  const user = await db.User.findOne({ email: req.body.email.trim() });
  if (!user) {
    res.status(500).json({ message: 'No User found.' });
    return;
  }
  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) {
    res.status(500).json({ message: 'Entered e-mail and password do not match!' });
    return;
  }
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET || '');
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  res.status(200).json(user._id);
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

  await db.User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(200).json('User has been updated successfully!'))
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteUser = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  await db.User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).json('User has been deleted successfully!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
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
