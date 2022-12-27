import { Request, Response } from "express";
import { usuario } from "../models/user";

export const UpdateUser = async (req: Request, res: Response) => {
  const { id, name, username, email, password } = req.body;
  try {
    const user = await usuario.findOneAndUpdate(id, {
      $set: req.body,
    });
  } catch (error) {}
};

export const DeleteUser = async (req: Request, res: Response) => {
  const { id, name, username, email, password } = req.body;
  try {
    const user = await usuario.findOneAndUpdate(id, {
      $set: req.body,
    });
  } catch (error) {}
};
