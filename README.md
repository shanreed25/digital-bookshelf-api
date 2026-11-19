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
