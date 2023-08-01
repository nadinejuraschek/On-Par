import express from 'express';
import { workhourController } from '../controllers/workhourController';

const router = express.Router();

// READ
router.get('/user/:id/workhours', workhourController.getWorkhours);
router.get('/user/:id/workhours/today', workhourController.getWorkhoursDay);
router.get('/user/:id/workhours/:startDate/:endDate', workhourController.getWorkhoursWeek);

// CREATE
router.post('/workhours', workhourController.createWorkhour);

// UPDATE
router.put('/workhours/:workhourid', workhourController.updateWorkhour);

// DELETE
router.delete('/workhours/:workhourid', workhourController.deleteWorkhour);

export default router;