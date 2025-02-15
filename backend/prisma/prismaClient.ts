import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$connect()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!'))
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
    process.exit(1);
  });

export default prisma;
