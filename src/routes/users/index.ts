const express = require("express");
const router = express.Router();
const {createUser} = require('./createUser');

router.post("", createUser);
//router.get("", getUsers);
//router.get("/:id", getUserById);
//router.put("/:id", updateUser);
//router.delete("/:id", deleteUser);

export default router;