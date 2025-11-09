import prisma from '#prisma/prismaClient.ts';
import type { User } from '#models/User.ts';

export const createUser = async (email: string, password: string, name: string, username: string, shortDesc: string, profilePic: any): Promise<User> => {
  return await prisma.user.create({
    data: { email, name, password, username, shortDesc }
  });
};

export async function checkEmailExists(email: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { email } });
  return !!user;
}

export async function checkIDExists(id: number): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { id } });
  return !!user;
}

export async function checkUsernameExists(username: string): Promise<boolean> {
  const user = await prisma.user.findUnique({ where: { username } });
  return !!user;
}