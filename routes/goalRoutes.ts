import express from 'express';
import { goalController } from '../controllers/goalController';

const router = express.Router();

// READ
router.get('/user/:id/goals', goalController.getGoals);

router.get('/user/:id/goals/:goalid', goalController.getSingleGoal);

// CREATE
router.post('/goals', goalController.createGoal);

// UPDATE
router.put('/goals/:goalid', goalController.updateGoal);

// DELETE
router.delete('/goals/:goalid', goalController.deleteGoal);

export default router;