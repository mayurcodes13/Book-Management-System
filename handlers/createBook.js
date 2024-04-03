const mongoose = require("mongoose");

const createBook = async(req, res) => {
  const booksModel = mongoose.model("books");

  await booksModel.create({
    book_name: req.body.book_name,
    author: req.body.author,
    rating: req.body.rating,
  });

  res.json({
    status: "success",
    message: "book created successfully!",
  });
};

module.exports = createBook;
// this code basically stores the data into mongodb which we have sent throught the postman.