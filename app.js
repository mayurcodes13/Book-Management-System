// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end("Hello from the Server!")
// });

// server.listen(8000, "localhost", () =>{
//     console.log("Server is started successfully!");
// });
// this is code for creating our server.

// const express = require('express');

// const app = express();

// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })

// app.listen(8000, () => {
//     console.log("Server is started successfully!")
// })

const express = require("express");
const mongoose = require("mongoose");
const createBook = require("./handlers/createBook");
const editBook = require("./handlers/editBook");
const getBook = require("./handlers/getBook");
const deleteBook = require("./handlers/deleteBook");
const bookSuggestions = require("./handlers/bookSuggestions");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/booksDB",{}).then(() => {
    console.log("Connection to MongoDB is successful!")
}).catch(() => {
    console.log("Connection to MongoDB is Failed!")
})

// Models
require("./booksmodel");

// Routes...
// post is used to send data to server for creation
app.post("/api/books", createBook);
app.patch("/api/books", editBook);
app.delete("/api/books/:book_id", deleteBook);
app.get("/api/books", getBook);
app.get("/api/ai", bookSuggestions);

app.listen(8000, () => {
  console.log("Server stared successfully!");
});
