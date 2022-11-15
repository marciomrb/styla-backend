import { Request, Response } from 'express';
import { User } from '../../models/User';
import bcrypt from 'bcrypt';

export async function updateUser(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.findByIdAndUpdate(userId, {
      name,
      email,
      password: hashedPassword
    });

    return res.sendStatus(204);

  } catch(error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
