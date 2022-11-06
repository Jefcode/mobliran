import { Router } from 'express';
import { authUser, registerUser } from '../controllers/userController';

const router = Router();

router.route('/').post(registerUser);
router.post('/login', authUser);

export default router;
