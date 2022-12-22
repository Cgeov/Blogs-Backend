import {Request,Response, Router} from 'express';
import Post from "../models/Post";

class PostRutas{
    router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    async getPosts(req: Request,res: Response){
        const posts = await Post.find();
        res.json(posts);
    }

    getPost(){

    }

    createPost(){

    }

    updatePost(){

    }

    deletePost(){

    }

    routes(){
        this.router.get('/post',this.getPosts);
        this.router.get('/post/:id',this.getPost);
        this.router.post('/posts',this.createPost);
        this.router.put('/posts/:id',this.updatePost);
        this.router.delete('/post/:id',this.deletePost);
    }
}
const postRoutes = new PostRutas();
export default postRoutes.router;