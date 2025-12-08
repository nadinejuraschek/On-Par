import { Request, Response } from 'express';
import dayjs from 'dayjs';
import db from '../models/db';
import { isValidUser } from '../utils/isValidUser';

// READ
const getWorkhours = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const result = await db.User.findById(req.user)
      .populate('workhours');

    if (!result) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json(result.workhours || []);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const getWorkhoursDay = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const today = dayjs().set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();

    const result = await db.User.findById(req.user)
      .populate({
        path: 'workhours',
        match: { date: today }
      });

    if (!result) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json(result.workhours || []);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const getWorkhoursWeek = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const startDate = dayjs(req.params.startDate).set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();
    const endDate = dayjs(req.params.endDate).set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();

    const result = await db.User.findById(req.user)
      .populate({
        path: 'workhours',
        match: { date: { $gte: startDate, $lt: endDate } }
      });

    if (!result) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json(result.workhours || []);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// CREATE
const createWorkhour = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const { date, hours } = req.body;

    if (!hours || !Array.isArray(hours) || hours.length === 0) {
      return res.status(400).json({ error: "Hours array is required and must not be empty." });
    }

    if (!hours[0].duration) {
      return res.status(400).json({ error: "Duration is required for work hours." });
    }

    const dateWithoutTime = dayjs(date).set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0).toDate();

    const workitem = await db.Workhour.findOne({ date: dateWithoutTime });

    if (!workitem) {
      const insertedWorkhour = await db.Workhour.create({
        date: dateWithoutTime,
        hours: hours,
        total: hours[0].duration,
      });

      await db.User.findByIdAndUpdate(
        req.user,
        { $push: { workhours: insertedWorkhour._id } }
      );

      return res.status(200).json('Workhours have been created successfully!');
    } else {
      const newTotal = workitem.total + hours[0].duration;
      await db.Workhour.findOneAndUpdate(
        { date: dateWithoutTime },
        {
          total: newTotal,
          $push: { hours: { $each: hours } }
        }
      );

      return res.status(200).json('Workhours have been created successfully!');
    }
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateWorkhour = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const updatedWorkhour = await db.Workhour.findByIdAndUpdate(
      req.params.workhourid,
      { $push: { hours: req.body } }
    );

    if (!updatedWorkhour) {
      return res.status(404).json({ error: "Workhour not found." });
    }

    return res.status(200).json('Workhours have been updated successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteWorkhour = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const deletedWorkhour = await db.Workhour.findByIdAndDelete(req.params.workhourid);

    if (!deletedWorkhour) {
      return res.status(404).json({ error: "Workhour not found." });
    }

    await db.User.findByIdAndUpdate(
      req.user,
      { $pull: { workhours: req.params.workhourid } }
    );

    return res.status(200).json('Workhours have been deleted successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const workhourController = {
  createWorkhour,
  deleteWorkhour,
  getWorkhours,
  getWorkhoursDay,
  getWorkhoursWeek,
  updateWorkhour,
};