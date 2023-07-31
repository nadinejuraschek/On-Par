import { Request, Response } from 'express';

import db from '../models/db';

// READ
const getNotes = async (req: Request, res: Response) => {
  const result = await db.User.findById(req.user)
    .populate('notes')
    .then(notes => notes)
    .catch(err => {
      res.status(500).json({ error: err.message });
    });

  return res.status(200).json(result?.notes);
};

const getSingleNote = async (req: Request, res: Response) => {
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
  await db.Note.create(req.body)
    .then(async (insertedNote) => {
      await db.User.findOneAndUpdate(
        { _id: req.user },
        { $push: { notes: insertedNote._id } })
        .then(() => {
          res.status(200).json('Success!')
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
  await db.Note.findOneAndUpdate({ _id: req.params.noteid }, req.body)
    .then(() => {
      res.status(200).json('Success!');
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteNote = async (req: Request, res: Response) => {
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