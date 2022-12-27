import { Request, Response } from "express";
import { usuario } from "../models/user";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
  const { name, username, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  try {
    const NewUser = new usuario({
      name: name,
      username: username,
      email: email,
      password: hashedPass,
    });
    const user = await NewUser.save();
    res.status(200).json({ message: "Tamos Recio" });
  } catch (error) {
    res.status(310).json({ message: error });
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await usuario.findOne({ username: username });
    if (!user) {
      return res.status(400).json("Wrong user");
    } else {
      const validation = await bcrypt.compare(password, user.password);
      if (!validation) {
        res.status(400).json("Wrong Password");
      } else {
        return res.status(200).json("ok");
      }
    }
  } catch (error) {
    res.status(310).json({ message: error });
  }
};
