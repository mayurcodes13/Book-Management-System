const mongoose = require('mongoose')

const editBook = async(req, res) => {

  const booksModel = mongoose.model('books');

  await booksModel.updateOne({
    _id: req.body.book_id,
  },{
    book_name: req.body.book_name,
    rating: req.body.rating,
    author: req.body.author
  })

  res.json({
    status: "success",
    message: "Book edited successfully!",
  });
};

module.exports = editBook;
