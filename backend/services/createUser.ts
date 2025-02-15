import prisma from '#prisma/prismaClient.ts';
import type { User } from '#models/User.ts';

export const createUser = async (email: string, password: string, name: string): Promise<User> => {
  return await prisma.user.create({
    data: { email, password, name }
  });
};