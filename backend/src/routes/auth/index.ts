import express from 'express'
import { AuthController } from '../../controllers';

const router = express.Router();
const {authenticate, updateByIdValidation} = AuthController;
router.post('', updateByIdValidation, authenticate);

export default router;