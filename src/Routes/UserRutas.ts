const express = require("express");
import { UpdateUser, DeleteUser } from "../controllers/UserController";
const router = express.Router();

router.put("/:id", UpdateUser);
router.delete("/:id", DeleteUser);

export default router;
