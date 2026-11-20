# Mongoose Models and Schemas: Digital Bookshelf API

## Project Setup
- [X] Create a new project directory (e.g., digital-bookshelf-api).
- [X] Initialize the project with `npm init -y`.
- [X] Install the required dependencies: `express`, `mongoose`, and `dotenv`.
- [X] Set up your file structure. It’s a good practice to separate your concerns. Create the following:
    - [X] `server.js`: The main entry point for your application.
    - [X] `db/`: A directory to hold your database connection logic.
    - [X] `models/`: A directory for your Mongoose models.
    - [X] `routes/`: A directory for your Express route definitions.
- [X] Create a `.env` file and add your MongoDB Atlas connection string to it.
- [X] Create a `.gitignore` file and add `node_modules/` and `.env` to it.


## Database Connection
- [X] In the `db/` directory, create a `connection.js` file.
- [X] In this file, use `mongoose.connect()` to establish a connection to your database using the URI from your `.env` file. Export your connection logic.
- [X] In `server.js`, import and execute your database connection.


## Book Schema and Model
- [X] In the `models/` directory, create a `Book.js` file.
- [X] Define a schema for a Book with the following fields and validation rules:
    - [X] `title`: A String, which is required.
    - [X] `author`: A String, which is required.
    - [X] `isbn`: A String, which must be unique.
    - [X] `publishedDate`: A Date.
    - [X] `inStock`: A Boolean, with a default value of true.
- [X] Compile this schema into a model named Book and export it.

##  API Routes
- [X] In the `routes/` directory, create a `bookRoutes.js` file.
- [X] Use `express.Router()` to create a new router instance.
- [ ] Implement the five core CRUD endpoints on this router:
    - [X] **Create: POST `/`** - Creates a new book using the data in req.body.
    - [X] **Read All: GET `/`** - Retrieves all books from the database.
    - [X] **Read One: GET `/:id`** - Retrieves a single book by its _id.
    - [X] **Update: PUT `/:id`** - Updates a book by its _id using the data in req.body.
    - [ ] **Delete: DELETE `/:id`** - Deletes a book by its _id.
- [ ] Use `async/await` and `try...catch` blocks in all routes to handle errors.
- [X] Export the router.