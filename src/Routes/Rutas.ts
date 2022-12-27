import { Request, Response, Router } from "express";
import auth from "../Routes/auth";
class IndexRutas {
  app: Router;
  constructor() {
    this.app = Router();
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => res.send("helo"));
    this.app.use("/api", auth);
  }
}

const indexRoutes = new IndexRutas();
indexRoutes.routes();

export default indexRoutes.app;
