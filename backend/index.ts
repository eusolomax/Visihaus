import { PrismaClient } from '@prisma/client'

const express = require('express');
const app = express();
const port = 8080;
const prisma = new PrismaClient()

async function main() {
  console.log('miann')
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
  console.log('ok')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});