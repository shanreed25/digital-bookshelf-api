import 'dotenv/config';
import express from 'express';
import connectToDB from './db/connection.js';
import bookRoutes from './routes/bookRoutes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/books', bookRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Digital Bookshelf API started' });
});

await connectToDB();//connect to db

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
