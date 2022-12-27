"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../Routes/auth"));
class IndexRutas {
    constructor() {
        this.app = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.app.get("/", (req, res) => res.send("helo"));
        this.app.use("/api", auth_1.default);
    }
}
const indexRoutes = new IndexRutas();
indexRoutes.routes();
exports.default = indexRoutes.app;
