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
- [X] Implement the five core CRUD endpoints on this router:
    - [X] **Create: POST `/`** - Creates a new book using the data in req.body.
    - [X] **Read All: GET `/`** - Retrieves all books from the database.
    - [X] **Read One: GET `/:id`** - Retrieves a single book by its _id.
    - [X] **Update: PUT `/:id`** - Updates a book by its _id using the data in req.body.
    - [X] **Delete: DELETE `/:id`** - Deletes a book by its _id.
- [X] Use `async/await` and `try...catch` blocks in all routes to handle errors.
- [X] Export the router.


## Reflection Questions

#### Why is it beneficial to separate your routes, models, and database connection into different directories?
> It is beneficial to separate your routes, models, and database connection into different directories, so the code is easier to work with and debug because each file has one job. Separation of concerns also makes the project easier to grow later. 

#### What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?
> `PUT` updates the entire item and any fields that are not added are removed or reset to default. `PATCH` updates only the fields that are included in the request and does not change the rest of the fields. My `PUT` endpoint resembles a `PATCH` request, because I am using `findByIdAndUpdate()` which changes only the fields sent in `req.body` and leaves other fields alone.

#### In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?
> Sending a `200` status with a short success message with the deleted item is a good habit/practice for the response you send back to the client after a successful deletion. Sending back the deleted item is helpful so that you know exactly what item was deleted.