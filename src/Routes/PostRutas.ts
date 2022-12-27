import { Request, Response, Router } from "express";

class PostRutas {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  getPost() {}

  createPost() {}

  updatePost() {}

  deletePost() {}

  routes() {
    this.router.get("/post/:id", this.getPost);
    this.router.post("/posts", this.createPost);
    this.router.put("/posts/:id", this.updatePost);
    this.router.delete("/post/:id", this.deletePost);
  }
}
const postRoutes = new PostRutas();
export default postRoutes.router;
