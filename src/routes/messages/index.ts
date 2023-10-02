import express from 'express'
import { MessagesController } from '../../controllers';

const router = express.Router();
const { createValidation, createMessage, getAll, getById, getByIdValidation, updateByIdValidation, updateById, deleteByIdValidation, deleteById} = MessagesController;

router.post('', createValidation, createMessage);
router.get('', getAll);
router.get('/:id', getByIdValidation, getById);
router.put('/:id', updateByIdValidation, updateById);
router.delete('/:id', deleteByIdValidation, deleteById);

export default router;