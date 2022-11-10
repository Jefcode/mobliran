import { Router } from 'express';
import {
  addToCart,
  authUser,
  getUserProfile,
  registerUser,
  updateCart,
  updateUserAddress,
  updateUserProfile,
} from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.put('/profile/address', protect, updateUserAddress);
router.route('/cart').post(protect, addToCart).put(protect, updateCart);

export default router;
