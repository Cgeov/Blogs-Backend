"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = exports.registerUser = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, email, password } = req.body;
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPass = yield bcrypt_1.default.hash(password, salt);
    try {
        const NewUser = new user_1.usuario({
            name: name,
            username: username,
            email: email,
            password: hashedPass,
        });
        const user = yield NewUser.save();
        res.status(200).json({ message: "Tamos Recio" });
    }
    catch (error) {
        res.status(310).json({ message: error });
    }
});
exports.registerUser = registerUser;
const LoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield user_1.usuario.findOne({ username: username });
        if (!user) {
            return res.status(400).json("Wrong Credential");
        }
        else {
            const validation = yield bcrypt_1.default.compare(password, user.password);
            if (!validation) {
                res.status(400).json("Wrong Password");
            }
            else {
                return res.status(200).json("ok");
            }
        }
    }
    catch (error) {
        res.status(310).json({ message: error });
    }
});
exports.LoginUser = LoginUser;
