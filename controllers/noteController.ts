import { Request, Response } from 'express';
import db from '../models/db';
import { isValidUser } from '../utils/isValidUser';

// READ
const getNotes = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const page = Math.max(0, Number(req.query.page) || 0);
    const limit = 10;

    const result = await db.User.findById(req.user)
      .populate({
        path: 'notes',
        options: {
          perDocumentLimit: limit,
          skip: page * limit,
        },
      });

    if (!result) {
      return res.status(404).json({ error: "User not found." });
    }

    const totalCountResult = await db.User.findById(req.user)
      .populate('notes');
    const totalCount = totalCountResult?.notes?.length || 0;

    return res.status(200).json({ notes: result.notes || [], total: totalCount });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const getSingleNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const note = await db.Note.findById(req.params.noteid);

    if (!note) {
      return res.status(404).json({ error: "Note not found." });
    }

    return res.status(200).json(note);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// CREATE
const createNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const validated = {
      ...req.body,
      ...(req.body.text && { text: req.body.text.trim() }),
      ...(req.body.title && { title: req.body.title.trim() }),
    };

    const insertedNote = await db.Note.create(validated);

    await db.User.findByIdAndUpdate(
      req.user,
      { $push: { notes: insertedNote._id } }
    );

    return res.status(200).json('Note has been created successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const validated = {
      ...req.body,
      ...(req.body.text && { text: req.body.text.trim() }),
      ...(req.body.title && { title: req.body.title.trim() }),
    };

    const updatedNote = await db.Note.findByIdAndUpdate(req.params.noteid, validated);

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found." });
    }

    return res.status(200).json('Note has been updated successfully!');
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  try {
    const deletedNote = await db.Note.findByIdAndDelete(req.params.noteid);

    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found." });
    }

    await db.User.findByIdAndUpdate(
      req.user,
      { $pull: { notes: req.params.noteid } }
    );

    return res.status(200).json("Note has been deleted successfully!");
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

export const noteController = {
  createNote,
  deleteNote,
  getNotes,
  getSingleNote,
  updateNote,
};