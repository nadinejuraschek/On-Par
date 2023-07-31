import { Request, Response } from 'express';

import db from '../models/db';

// READ
const getPayments = async (req: Request, res: Response) => {
  const result = await db.User.findById(req.user)
    .populate('payments')
    .then(payments => payments)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  return res.status(200).json(result?.payments);
};

// CREATE
const createPayment = async (req: Request, res: Response) => {
  await db.Payment.create(req.body)
    .then(async insertedPayment => {
      await db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { payments: insertedPayment._id } })
        .then(() => res.status(200).json('Success!'))
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// UPDATE
const updatePayment = async (req: Request, res: Response) => {
  await db.Payment.findByIdAndUpdate(req.params.paymentid, req.body)
    .then(() => {
      res.status(200).json('Success!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deletePayment = async (req: Request, res: Response) => {
  await db.Payment.findByIdAndRemove(req.params.paymentid)
    .then(() => {
      res
        .status(200)
        .json('Payment has been deleted successfully!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

export const paymentController = {
  createPayment,
  deletePayment,
  getPayments,
  updatePayment,
};