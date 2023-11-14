import express from 'express'
import { ContactsController } from '../../controllers';
import { getAllValidation, deleteByIdValidation, getByIdValidation } from '../../middleware/restValidator';

const router = express.Router();
const { addContact, addValidation, getAll, deleteById, updateById, updateByIdValidation } = ContactsController;

router.post('/', addValidation, addContact);
router.get('/', getAllValidation, getAll);
router.get('/:id', getByIdValidation, getAll);
router.delete('/:id', deleteByIdValidation, deleteById);
router.put('/:id', updateByIdValidation, updateById);

export default router;