import { Request, Response } from 'express';

import db from '../models/db';

// READ
const getGoals = async (req: Request, res: Response) => {
  const result = await db.User.findById(req.user)
    .populate({
      path: 'goals',
      options: { sort: { dueDate: 1 }}
    })
    .then(goals => goals)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  return res.status(200).json(result?.goals);
};

const getSingleGoal = async (req: Request, res: Response) => {
  await db.Goal.findById(req.params.goalId)
    .then(goal => {
      res.status(200).json(goal);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
const createGoal = async (req: Request, res: Response) => {
  await db.Goal.create(req.body)
    .then(insertedGoal => {
      db.User.findOneAndUpdate(
        { _id: req.user },
        { $push: { goals: insertedGoal._id } })
        .then(() => res.json('Success!'))
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// UPDATE
const updateGoal = async (req: Request, res: Response) => {
  await db.Goal.findOneAndUpdate({ _id: req.params.goalid }, req.body)
    .then(() => res.status(200).json('Success!'))
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteGoal = async (req: Request, res: Response) => {
  await db.Goal.findByIdAndRemove(req.params.goalid)
    .then(() => {
      res.status(200).json('Goal has been deleted successfully!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

export const goalController = {
  createGoal,
  deleteGoal,
  getGoals,
  getSingleGoal,
  updateGoal,
};