import { Router } from 'express';
import { registerUser } from '../controllers/userRegisterController';

const router = Router();

router.post('/register',registerUser )

export default router;
