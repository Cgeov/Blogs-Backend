"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const Rutas_1 = __importDefault(require("./Routes/Rutas"));
const PostRutas_1 = __importDefault(require("./Routes/PostRutas"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.route();
    }
    config() {
        const MONGO_URI = "mongodb+srv://cgeov:maxi1234@cluster0.d4fk8fx.mongodb.net/?retryWrites=true&w=majority";
        mongoose_1.default.connect(MONGO_URI).then((db) => console.log("exito"));
        this.app.set("port", 4111);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, helmet_1.default)());
        this.app.use((0, compression_1.default)());
        this.app.use((0, cors_1.default)());
    }
    route() {
        this.app.use(Rutas_1.default);
        this.app.use(PostRutas_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
