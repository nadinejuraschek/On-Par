import express from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

// READ
router.get('/', userController.getUser);

router.get('/:id', userController.getUserById);

// CREATE
router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.post('/signout', userController.signoutUser);

// UPDATE
router.put('/:id', userController.updateUser);

// DELETE
router.delete('/:id', userController.deleteUser);

export default router;