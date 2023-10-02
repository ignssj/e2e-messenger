import express from 'express'
const router = express.Router();
import {createValidation, createMessage} from '../../controllers/messages/create';
import {getAll} from '../../controllers/messages/getAll';

router.post('', createValidation, createMessage);
router.get('', getAll);
router.get('/:id');
router.put('/:id');
router.delete('/:id')

export default router;