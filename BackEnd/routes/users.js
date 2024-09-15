import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  signIn,
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from users route');
});
router.post('/signup', createUser);
router.get('/getall', getAllUsers);
router.get('/get/:id', getUserById);
router.patch('/update/:id', updateUserById);
router.delete('/delete/:id', deleteUserById);
router.post('/signin', signIn);

export default router;
