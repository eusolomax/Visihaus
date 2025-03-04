import type { Request, Response } from 'express';
import { checkEmailExists, createUser } from '#services/createUser.ts';
import type { User } from '#models/User.ts';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) return res.status(400).json({ error: 'Missing fields.' })
    if (await checkEmailExists(email)) return res.status(400).json({ error: 'User already exists.' })

    const user: User = await createUser(email, password, name);
    res.status(201).json(user);

  } catch (error) { res.status(500).json({ error: error }) }
};