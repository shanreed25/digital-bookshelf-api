import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

//Create: POST / - Creates a new book using the data in req.body
router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json(book);
  } catch (err) {
    console.error("Error:", err.message);
    res
      .status(400)
      .json({ message: "Error creating book", error: err.message });
  }
});

//Read All: GET / - Retrieves all books from the database.
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error("Error:", err.message);
    res
      .status(500)
      .json({ message: "Error fetching books", error: err.message });
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
    res
      .status(500)
      .json({ message: "Error fetching book", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(updatedBook);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating book", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book deleted", deletedBook });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting book", error: err.message });
  }
});

export default router;
