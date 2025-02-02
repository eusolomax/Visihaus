// importando os pacotes para uso no arquivo index.js
const express = require('express');

const app = express();
const port = 8080;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
  console.log('ok')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});