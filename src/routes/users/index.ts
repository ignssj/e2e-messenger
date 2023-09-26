import express from 'express';
const router = express.Router();
import {createUser, createValidation} from '../../controllers/users/create';
import {getAll, getAllValidation} from '../../controllers/users/getAll';
import {getById, getByIdValidation} from '../../controllers/users/getById';

router.post('', createValidation, createUser);
router.get('', getAllValidation, getAll);
router.get('/:id', getByIdValidation, getById);
//router.put("/:id", updateUser);
//router.delete("/:id", deleteUser);

export default router;