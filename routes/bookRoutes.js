import express from "express";
import Book from "../models/Book.js";


const router = express.Router();

//Create: POST / - Creates a new book using the data in req.body
router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.json(book);
  } catch (err) {
    console.error("Error:", err.message);
    res.json({ message: "There was an issue." });
  }
});

//Read All: GET / - Retrieves all books from the database.
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error("Error:", err.message);
    res.json({ message: "There was an issue." });
  }
});

//Read One: GET /:id - Retrieves a single book by its _id.
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (err) {
    console.error("Error:", err.message);
    res.json({ message: "There was an issue." });
  }
});

export default router;
