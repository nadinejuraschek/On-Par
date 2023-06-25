import { Request, Response } from 'express';

import db from '../models/db';

// READ
const getNotes = async (req: Request, res: Response) => {
  await db.User.findById(req.user)
    .populate('notes')
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
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
    .then(insertedNote => {
      db.User.findByIdAndUpdate(
        { _id: req.user },
        { $push: { notes: insertedNote._id } },
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
const updateNote = async (req: Request, res: Response) => {
  await db.Note.findByIdAndUpdate(req.params.noteid, req.body)
    .then(updatedNote => {
      res.status(200).json(updatedNote);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};

// DELETE
const deleteNote = async (req: Request, res: Response) => {
  await db.Note.findByIdAndRemove(req.params.noteid)
    .then(deletedNote => {
      res.status(200).json({ message: "Note has been deleted successfully!"});
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