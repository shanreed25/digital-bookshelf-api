import 'dotenv/config';
import express from 'express';
import connectToDB from './db/connection.js';
import Book from './models/Book.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Digital Bookshelf API started' });
});

await connectToDB();//connect to db

const newBook = await Book.create({
  title: 'Learning MongoDB',
  author: 'Shannon Reed',
  isbn: '1112223335557778'
})

console.log(newBook);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
