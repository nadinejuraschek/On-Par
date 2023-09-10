import { Request, Response } from 'express';
import db from '../models/db';
import { isValidUser } from '../utils/isValidUser';

// READ
const getNotes = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  const page = Number(req.query.page) || 0;
  const limit = 10;

  const result = await db.User.findById(req.user)
    .populate({
      path:'notes',
      options: {
        perDocumentLimit: limit,
        skip: page * limit,
      },
    })
    .then(notes => notes)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  const totalCount = await db.User.findById(req.user)
    .populate('notes')
    .then(data => data?.notes.length)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  return res.status(200).json({ notes: result?.notes, total: totalCount });
};

const getSingleNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  await db.Note.findById(req.params.noteid)
    .then(note => {
      res.status(200).json(note);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// CREATE
const createNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  const validated = {
    ...req.body,
    text: req.body.text.trim(),
    title: req.body.title.trim(),
  };

  await db.Note.create(validated)
    .then(async (insertedNote) => {
      await db.User.findOneAndUpdate(
        { _id: req.user },
        { $push: { notes: insertedNote._id } })
        .then(() => {
          res.status(200).json('Note has been created successfully!')
        })
        .catch((err) => {
          res.status(500).json({ error: err.message });
        });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// UPDATE
const updateNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  const validated = {
    ...req.body,
    text: req.body.text.trim(),
    title: req.body.title.trim(),
  };

  await db.Note.findOneAndUpdate({ _id: req.params.noteid }, validated)
    .then(() => {
      res.status(200).json('Note has been updated successfully!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteNote = async (req: Request, res: Response) => {
  const validUser = isValidUser(res, req.user);
  if (!validUser) {
    return res.status(403).json("Please log in to use this feature.");
  }

  await db.Note.findByIdAndRemove(req.params.noteid)
    .then(() => {
      res.status(200).json("Note has been deleted successfully!");
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    })
};

export const noteController = {
  createNote,
  deleteNote,
  getNotes,
  getSingleNote,
  updateNote,
};