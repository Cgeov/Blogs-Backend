"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRutas {
    constructor() {
        this.app = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.app.get('/', (req, res) => res.send(''));
    }
}
const indexRoutes = new IndexRutas();
indexRoutes.routes();
exports.default = indexRoutes.app;
