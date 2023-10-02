import users from './users/';
import auth from './auth';
import messages from './messages';
import {Router} from 'express';
import { tokenValidation } from '../middleware/tokenValidation';

const router = Router();
router.use('/auth', auth);
router.use('/users', users);
router.use('/messages', tokenValidation, messages);

export default router;
