import type { Request, Response } from 'express';
import { createUser } from '#services/createUser.ts';
import type { User } from '#models/User.ts';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const user: User = await createUser(email, password, name);
    res.status(201).json(user);

  } catch (error) { res.status(500).json({ error: 'Error creating user' }) }
};