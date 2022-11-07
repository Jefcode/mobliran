import { Router } from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserAddress,
} from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile/address', protect, updateUserAddress);

export default router;
