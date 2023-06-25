import express from 'express';
import { noteController } from '../controllers/noteController';

const router = express.Router();

// READ
router.get('/user/:id/notes', noteController.getNotes);

router.get('/user/:id/notes/:noteid', noteController.getSingleNote);

// CREATE
router.post('/notes', noteController.createNote);

// UPDATE
router.put('/notes/:noteid', noteController.updateNote);

// DELETE
router.delete('/notes/:noteid', noteController.deleteNote);

export default router;