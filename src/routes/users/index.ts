import express from 'express';
const router = express.Router();
import {createUser, createValidation} from '../../controllers/users/create';
import {getAll, getAllValidation} from '../../controllers/users/getAll';
import {getById, getByIdValidation} from '../../controllers/users/getById';
import {updateById, updateByIdValidation} from '../../controllers/users/updateById';
import {deleteById, deleteByIdValidation} from '../../controllers/users/deleteById';

router.post('', createValidation, createUser);
router.get('', getAllValidation, getAll);
router.get('/:id', getByIdValidation, getById);
router.put('/:id', updateByIdValidation, updateById);
router.delete('/:id', deleteByIdValidation, deleteById);

export default router;