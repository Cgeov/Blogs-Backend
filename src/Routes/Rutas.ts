import { Request, Response, Router } from "express";

class IndexRutas {
  app: Router;
  constructor() {
    this.app = Router();
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => res.send("helo"));
  }
}

const indexRoutes = new IndexRutas();
indexRoutes.routes();

export default indexRoutes.app;
