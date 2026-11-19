import 'dotenv/config';
import express from 'express';
import connectToDB from './db/connection.js';

const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello, From Express!');
});

await connectToDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
