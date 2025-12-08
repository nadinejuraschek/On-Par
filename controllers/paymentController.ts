import { Request, Response } from 'express';
import db from '../models/db';
import { isValidUser } from '../utils/isValidUser';

// READ
const getPayments = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const result = await db.User.findById(req.user)
      .populate('payments');

    if (!result) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json(result.payments || []);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// CREATE
const createPayment = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const insertedPayment = await db.Payment.create(req.body);

    await db.User.findByIdAndUpdate(
      req.user,
      { $push: { payments: insertedPayment._id } }
    );

    return res.status(200).json('Payment has been created successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updatePayment = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const updatedPayment = await db.Payment.findByIdAndUpdate(req.params.paymentid, req.body);

    if (!updatedPayment) {
      return res.status(404).json({ error: "Payment not found." });
    }

    return res.status(200).json('Payment has been updated successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
const deletePayment = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const deletedPayment = await db.Payment.findByIdAndDelete(req.params.paymentid);

    if (!deletedPayment) {
      return res.status(404).json({ error: "Payment not found." });
    }

    await db.User.findByIdAndUpdate(
      req.user,
      { $pull: { payments: req.params.paymentid } }
    );

    return res.status(200).json('Payment has been deleted successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const paymentController = {
  createPayment,
  deletePayment,
  getPayments,
  updatePayment,
};