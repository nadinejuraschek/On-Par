import { Request, Response } from 'express';

import dayjs from 'dayjs';
import db from '../models/db';

// READ
const getWorkhours = async (req: Request, res: Response) => {
  await db.User.findById(req.user)
    .populate('workhours')
    .then(workhours => {
      res.status(200).json(workhours);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
const createWorkhour = async (req: Request, res: Response) => {
  const { date, dateFormat, hours } = req.body;

  const workitem = await db.Workhour.findOne({ dateFormat: dateFormat});

  if (workitem === null) {
    await db.Workhour.create({
      date: date,
      dateFormat: dayjs(date).format('YY-MM-DD'),
      hours: hours,
      total: hours[0].duration,
    })
      .then(async insertedWorkhour => {
        await db.User.findOneAndUpdate(
          { _id: req.user },
          { $push: { workhours: insertedWorkhour._id } },
        ).then(() => res.json('Success!'))
        .catch((err) => console.log('Error: ' + err));
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  } else {
    const newTotal = workitem.total + hours[0].duration;
    await db.Workhour.findOneAndUpdate(
      { date: date },
      { total: newTotal, $push: { hours: hours } },
      )
      .then(updatedWorkhour => {
        res.status(200).json(updatedWorkhour);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };
};

// UPDATE
const updateWorkhour = async (req: Request, res: Response) => {
  await db.Workhour.findOneAndUpdate(
    { _id: req.params.workhourid },
    { $push: { hours: req.body } }
    )
    .then(updatedWorkhour => {
      res.status(200).json(updatedWorkhour);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteWorkhour = async (req: Request, res: Response) => {
  await db.Workhour.findByIdAndRemove(req.params.workhourid)
    .then(() => {
      res
        .status(200)
        .json({ message: 'Workhours have been deleted successfully!' });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

export const workhourController = {
  createWorkhour,
  deleteWorkhour,
  getWorkhours,
  updateWorkhour,
};