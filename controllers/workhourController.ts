import { Request, Response } from 'express';
import dayjs from 'dayjs';
import db from '../models/db';
import { handleUnknownUser } from '../utils/handleUnknownUser';

// READ
const getWorkhours = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  const result = await db.User.findById(req.user)
    .populate('workhours')
    .then(workhours => workhours)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  res.status(200).json(result?.workhours);
};

const getWorkhoursDay = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  const today = dayjs().set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();

  const result = await db.User.findById(req.user)
    .populate({
      path: 'workhours',
      match: { date: today }
    })
    .then(workhours => workhours)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  res.status(200).json(result?.workhours);
};

const getWorkhoursWeek = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  const startDate = dayjs(req.params.startDate).set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();
  const endDate = dayjs(req.params.endDate).set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();

  const result = await db.User.findById(req.user)
    .populate({
      path: 'workhours',
      match: { date: { $gte: startDate, $lt: endDate } }
    })
    .then(workhours => workhours)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  res.status(200).json(result?.workhours);
};

// CREATE
const createWorkhour = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  const { date, hours } = req.body;

  const dateWithoutTime = dayjs(date).set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();

  const workitem = await db.Workhour.findOne({ date: dateWithoutTime });

  if (!workitem) {
    await db.Workhour.create({
      date: dateWithoutTime,
      hours: hours,
      total: hours[0].duration,
    })
      .then(async insertedWorkhour => {
        await db.User.findOneAndUpdate(
          { _id: req.user },
          { $push: { workhours: insertedWorkhour._id } },
        ).then(() => res.json('Success!'))
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  } else {
    const newTotal = workitem.total + hours[0].duration;
    await db.Workhour.findOneAndUpdate(
      { date: dateWithoutTime },
      { total: newTotal, $push: { hours: hours } },
      )
      .then(() => res.status(200).json('Workhours have been created successfully!'))
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };
};

// UPDATE
const updateWorkhour = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  await db.Workhour.findOneAndUpdate(
    { _id: req.params.workhourid },
    { $push: { hours: req.body } }
    )
    .then(() => {
      res.status(200).json('Workhours have been updated successfully!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteWorkhour = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  await db.Workhour.findByIdAndRemove(req.params.workhourid)
    .then(() => {
      res
        .status(200)
        .json('Workhours have been deleted successfully!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

export const workhourController = {
  createWorkhour,
  deleteWorkhour,
  getWorkhours,
  getWorkhoursDay,
  getWorkhoursWeek,
  updateWorkhour,
};