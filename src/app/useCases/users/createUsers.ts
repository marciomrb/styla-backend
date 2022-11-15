import { Request, Response } from 'express';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';

export async function createUsers(req: Request, res: Response) {

  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json(user);

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
