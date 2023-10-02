import express from 'express';
import { tokenValidation } from '../../middleware/tokenValidation';
import { UsersController } from '../../controllers';

const router = express.Router();
const {createValidation, getByIdValidation, getAllValidation, deleteByIdValidation, updateByIdValidation, createUser, getAll, getById, updateById, deleteById} = UsersController;

router.post('', createValidation, createUser);
router.get('', tokenValidation, getAllValidation, getAll);
router.get('/:id', tokenValidation, getByIdValidation, getById);
router.put('/:id', tokenValidation, updateByIdValidation, updateById);
router.delete('/:id', tokenValidation, deleteByIdValidation, deleteById);

export default router;