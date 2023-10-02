import {Router} from 'express';
import users from './users/';
import auth from './auth';
import messages from './messages';
const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/messages', messages);

export default router;
