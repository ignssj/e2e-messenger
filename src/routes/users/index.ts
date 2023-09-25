import express from 'express';
const router = express.Router();
import {createUser, createValidation} from '../../controllers/users/create';

router.post('', createValidation, createUser);
//router.get("", getUsers);
//router.get("/:id", getUserById);
//router.put("/:id", updateUser);
//router.delete("/:id", deleteUser);

export default router;