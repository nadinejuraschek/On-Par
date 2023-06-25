import { Request, Response } from 'express';

import db from '../models/db';

// READ
const getGoals = async (req: Request, res: Response) => {
  await db.User.findById(req.user)
    .populate({
      path: 'goals',
      options: { sort: { dueDate: 1 }}
    })
    .then(goals => {
      res.status(200).json(goals);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
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
      db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { goals: insertedGoal._id } },
        (error, success) => {
          if (error) {
            console.log('Error: ' + error);
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
const updateGoal = async (req: Request, res: Response) => {
  await db.Goal.findByIdAndUpdate(req.params.goalid, req.body)
    .then(updatedGoal => {
      res.status(200).json(updatedGoal);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteGoal = async (req: Request, res: Response) => {
  await db.Goal.findByIdAndRemove(req.params.goalid)
    .then(deletedGoal => {
      res.status(200).json({ message: 'Goal has been deleted successfully!' });
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