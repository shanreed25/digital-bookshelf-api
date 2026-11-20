import mongoose from 'mongoose'

const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        trim: true
    },
    author:{
        type: String,
        required: true,
        trim: true
    },
    isbn:{
        type: String,
        unique: true,
        trim: true
    },
    publishedDate:{
        type: Date
    },
    inStock:{
        type: Boolean,
        default: true
    }
  })

const Book = model('Book', bookSchema);

export default Book;