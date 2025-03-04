import prisma from '#prisma/prismaClient.ts';
import type { User } from '#models/User.ts';

export const createUser = async (email: string, password: string, name: string): Promise<User> => {
  return await prisma.user.create({
    data: { email, password, name }
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
