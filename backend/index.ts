import userRoutes from '#routes/userRoutes.ts'

const cors = require('cors');
const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => { console.log(`Backend server | Up & Running! ${port}`) })

app.use(cors());
app.use(express.json())
app.use('/api', userRoutes)

