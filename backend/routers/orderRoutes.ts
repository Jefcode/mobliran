import { Router } from 'express';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
} from '../controllers/orderController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.route('/').post(protect, addOrderItems);
router.get('/myorders', protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);

export default router;
