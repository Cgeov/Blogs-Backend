const express = require("express");
import { registerUser, LoginUser } from "../controllers/AuthController";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser);

export default router;
