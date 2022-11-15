import { Router } from 'express';

import {
  getAllProducts,
  getProduct,
  createProductReview,
} from './../controllers/productController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.route('/').get(getAllProducts);
router.route('/:id').get(getProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
