const mongoose = require("mongoose");

const getBook = async (req, res) => {
  const booksModel = mongoose.model("books");

  const getBooks = await booksModel.find({});  // so, in {} we pass certain condition about what we want like if we want books of rating 10, so by passing it, we will just get the books which have the ratings of 10, not the all books.

  res.json({
    status: "success",
    data: getBooks,
  });
};

module.exports = getBook;
