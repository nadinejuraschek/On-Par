import { Request, Response } from 'express';

import db from '../models/db';

// READ
const getPayments = async (req: Request, res: Response) => {
  await db.User.findById(req.user)
    .populate('payments')
    .then(payments => {
      res.status(200).json(payments);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
const createPayment = async (req: Request, res: Response) => {
  await db.Payment.create(req.body)
    .then(insertedPayment => {
      db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { payments: insertedPayment._id } },
        (err: any) => {
          if (err) {
            console.log('Error: ' + err);
          } else {
            res.json('Success!');
          }
        }
      );
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// UPDATE
const updatePayment = async (req: Request, res: Response) => {
  await db.Payment.findByIdAndUpdate(req.params.paymentid, req.body)
    .then(updatedPayment => {
      res.status(200).json(updatedPayment);
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
        .json({ message: 'Payment has been deleted successfully!' });
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