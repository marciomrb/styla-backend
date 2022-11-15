import { Request, Response } from 'express';
import { User } from '../../models/User';

export async function getUserById(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    return res.json(user);
  } catch(error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
