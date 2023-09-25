import express from 'express';
const router = express.Router();
import {createUser, createValidation} from '../../controllers/users/create';
import {getAll, getAllValidation} from '../../controllers/users/getAll';

router.post('', createValidation, createUser);
router.get('', getAllValidation, getAll);
//router.get("/:id", getUserById);
//router.put("/:id", updateUser);
//router.delete("/:id", deleteUser);

export default router;