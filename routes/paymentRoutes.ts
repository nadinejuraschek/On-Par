import express from 'express';
import { paymentController } from '../controllers/paymentController';

const router = express.Router();

// READ
router.get('/user/:id/payments', paymentController.getPayments);

// CREATE
router.post('/payments', paymentController.createPayment);

// UPDATE
router.put('/payments/:paymentid', paymentController.updatePayment);

// DELETE
router.delete('/payments/:paymentid', paymentController.deletePayment);

export default router;