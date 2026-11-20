import 'dotenv/config';
import express from 'express';
import connectToDB from './db/connection.js';
import Book from './models/Book.js';
import bookRoutes from './routes/bookRoutes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/books', bookRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'Digital Bookshelf API started' });
});

await connectToDB();//connect to db

// const newBook = await Book.create({
//   title: 'Learning HTML',
//   author: 'Rita Miller',
//   isbn: '9998887776661112'
// })

// console.log(newBook);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
