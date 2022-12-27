"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController_1 = require("../controllers/UserController");
const router = express.Router();
router.post("/register", UserController_1.registerUser);
router.post("/login", UserController_1.LoginUser);
exports.default = router;
