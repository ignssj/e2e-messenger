import express from 'express'
import { MessagesController } from '../../controllers';
import { getByIdValidation, deleteByIdValidation, getAllValidation } from '../../middleware/restValidator';
const { createValidation, createMessage, getAll, getById, updateByIdValidation, updateById, deleteById} = MessagesController;

const router = express.Router();

router.post('', createValidation, createMessage);
router.get('', getAllValidation, getAll);
router.get('/:id', getByIdValidation, getById);
router.put('/:id', updateByIdValidation, updateById);
router.delete('/:id', deleteByIdValidation, deleteById);

export default router;