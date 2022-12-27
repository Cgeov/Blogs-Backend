import { Response, Request } from "express";
import { blog } from "../models/Post";
import bcrypt from "bcrypt";
import { usuario } from "../models/user";

export const NewPost = async (req: Request, res: Response) => {
  const { title, content, image } = req.body;
  try {
    const NewBlog = new blog({
      title: title,
      content: content,
      image: image,
    });
    const data = await NewBlog.save();
    res.status(200).json({ message: "Tamos Recio" });
  } catch (error) {
    res.status(310).json({ message: error });
  }
};

export const UpdatePost = async (req: Request, res: Response) => {
  const { title, content, image } = req.body;
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await usuario.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ message: "Tamos Recio" });
    } catch (error) {
      res.status(310).json({ message: error });
    }
  } else {
    res.status(401).json({ message: "You can only update your posts" });
  }
};

export const DeletePost = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Tamos Recio" });
  } catch (error) {
    res.status(310).json({ message: error });
  }
};
