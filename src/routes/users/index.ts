import express from 'express';
const router = express.Router();
import { tokenValidation } from '../../middleware/tokenValidation';
import {createUser, createValidation} from '../../controllers/users/create';
import {getAll, getAllValidation} from '../../controllers/users/getAll';
import {getById, getByIdValidation} from '../../controllers/users/getById';
import {updateById, updateByIdValidation} from '../../controllers/users/updateById';
import {deleteById, deleteByIdValidation} from '../../controllers/users/deleteById';

router.post('', createValidation, createUser);
router.get('', tokenValidation, getAllValidation, getAll);
router.get('/:id', tokenValidation, getByIdValidation, getById);
router.put('/:id', tokenValidation, updateByIdValidation, updateById);
router.delete('/:id', tokenValidation, deleteByIdValidation, deleteById);

export default router;