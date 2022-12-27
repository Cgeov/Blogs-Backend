import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import * as dotenv from "dotenv";
import Rutas from "./Routes/Rutas";
import PostRutas from "./Routes/PostRutas";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.route();
    dotenv.config();
  }

  config() {
    this.app.set("port", 4111);
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }
  route() {
    this.app.use(Rutas);
    this.app.use(PostRutas);
  }

  start() {
    mongoose.connect(process.env.MONGO_URI!).then(() => console.log("exito"));
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
