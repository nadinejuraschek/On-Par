import { Request, Response } from 'express';
import db from '../models/db';
import { handleUnknownUser } from '../utils/handleUnknownUser';

// READ
const getGoals = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

  const filter = req.query.filter || '';
  const limit = req.query.limit || '';

  const result = await db.User.findById(req.user)
    .populate({
      path: 'goals',
      options: {
        perDocumentLimit: limit,
        sort: { dueDate: 1 },
      },
    })
    .then(goals => goals)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  if (filter === 'month') {
    const incompleteGoals = result?.goals?.filter( ({ checked }) => !checked ) || [];
    const filteredGoals = incompleteGoals?.filter( ({ dueDate }) => new Date(dueDate).getMonth() === new Date().getMonth()) || [];

    return res.status(200).json(filteredGoals);
  }

  if (filter === 'upcoming') {
    const incompleteGoals = result?.goals?.filter( ({ checked }) => !checked ) || [];
    const filteredGoals = incompleteGoals?.filter( ({ dueDate }) => new Date(dueDate).getMonth() !== new Date().getMonth()) || [];

    return res.status(200).json(filteredGoals);
  }

  if (filter === 'completed') {
    const filteredGoals = result?.goals?.filter( ({ checked }) => checked ) || [];
    return res.status(200).json(filteredGoals);
  }

  return res.status(200).json(result?.goals);
};

const getSingleGoal = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

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
  handleUnknownUser(res, req.user);

  const validated = { ...req.body, text: req.body.text.trim() };

  await db.Goal.create(validated)
    .then(insertedGoal => {
      db.User.findOneAndUpdate(
        { _id: req.user },
        { $push: { goals: insertedGoal._id } })
        .then(() => res.status(200).json('Goal has been created successfully!'))
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
  handleUnknownUser(res, req.user);

  const validated = { ...req.body, text: req.body.text.trim() };

  await db.Goal.findOneAndUpdate({ _id: req.params.goalid }, validated)
    .then(() => res.status(200).json('Goal has been updated successfully!'))
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteGoal = async (req: Request, res: Response) => {
  handleUnknownUser(res, req.user);

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