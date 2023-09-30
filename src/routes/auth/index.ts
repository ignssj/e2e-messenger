import express from 'express'
import { authenticate, updateByIdValidation } from '../../controllers/auth/authenticate';

const router = express.Router();
router.post('', updateByIdValidation, authenticate);

export default router;