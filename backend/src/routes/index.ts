import users from './users/';
import auth from './auth';
import messages from './messages';
import contacts from './contacts';
import swaggerUi from "swagger-ui-express";
import swaggerFile from '../docs/swagger_output.json';
import { Router } from 'express';
import { tokenValidation } from '../middleware/tokenValidation';

const router = Router();
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
router.use('/auth', auth);
router.use('/users', users);
router.use('/messages', tokenValidation, messages);
router.use('/contacts', tokenValidation, contacts);

export default router;
