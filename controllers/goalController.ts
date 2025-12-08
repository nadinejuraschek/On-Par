import { Request, Response } from 'express';
import db from '../models/db';
import { isValidUser } from '../utils/isValidUser';

// READ
const getGoals = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const filter = req.query.filter || '';
    const limit = req.query.limit ? Number(req.query.limit) : undefined;

    const result = await db.User.findById(req.user)
      .populate({
        path: 'goals',
        options: {
          ...(limit && { perDocumentLimit: limit }),
          sort: { dueDate: 1 },
        },
      });

    if (!result) {
      return res.status(404).json({ error: "User not found." });
    }

    const goals = result.goals || [];

    if (filter === 'month') {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      const incompleteGoals = goals.filter(({ checked }) => !checked);
      const filteredGoals = incompleteGoals.filter(({ dueDate }) => {
        const goalDate = new Date(dueDate);
        return goalDate.getMonth() === currentMonth && goalDate.getFullYear() === currentYear;
      });

      return res.status(200).json(filteredGoals);
    }

    if (filter === 'upcoming') {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      const incompleteGoals = goals.filter(({ checked }) => !checked);
      const filteredGoals = incompleteGoals.filter(({ dueDate }) => {
        const goalDate = new Date(dueDate);
        return !(goalDate.getMonth() === currentMonth && goalDate.getFullYear() === currentYear);
      });

      return res.status(200).json(filteredGoals);
    }

    if (filter === 'completed') {
      const filteredGoals = goals.filter(({ checked }) => checked);
      return res.status(200).json(filteredGoals);
    }

    return res.status(200).json(goals);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const getSingleGoal = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const goal = await db.Goal.findById(req.params.goalId);

    if (!goal) {
      return res.status(404).json({ error: "Goal not found." });
    }

    return res.status(200).json(goal);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// CREATE
const createGoal = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const validated = req.body.text
      ? { ...req.body, text: req.body.text.trim() }
      : req.body;

    const insertedGoal = await db.Goal.create(validated);

    await db.User.findByIdAndUpdate(
      req.user,
      { $push: { goals: insertedGoal._id } }
    );

    return res.status(200).json('Goal has been created successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateGoal = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const validated = req.body.text ? { ...req.body, text: req.body.text.trim() } : req.body;

    const updatedGoal = await db.Goal.findByIdAndUpdate(req.params.goalid, validated);

    if (!updatedGoal) {
      return res.status(404).json({ error: "Goal not found." });
    }

    return res.status(200).json('Goal has been updated successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteGoal = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const deletedGoal = await db.Goal.findByIdAndDelete(req.params.goalid);

    if (!deletedGoal) {
      return res.status(404).json({ error: "Goal not found." });
    }

    await db.User.findByIdAndUpdate(
      req.user,
      { $pull: { goals: req.params.goalid } }
    );

    return res.status(200).json('Goal has been deleted successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const goalController = {
  createGoal,
  deleteGoal,
  getGoals,
  getSingleGoal,
  updateGoal,
};