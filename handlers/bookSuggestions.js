const mongoose = require("mongoose");
const { OpenAI } = require('openai'); // Corrected import statement

const bookSuggestions = async (req, res) => {
  const booksModel = mongoose.model("books");
  const getBooks = await booksModel.find({});
  console.log(getBooks);

  const prompt = 
    "give me 10 book suggestions based on these books: " + getBooks.toString();

  const openai = new OpenAI({
    apiKey: "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", // Ensure you secure your API key properly
  });

  async function main() {
    const params = {
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    }; 
    const chatCompletion = await openai.chat.completions.create(params);
    console.log(chatCompletion); // Optionally log the completion or handle it as needed
  }

  await main(); // Ensure main function execution within the async scope

  res.json({
    status: "Hello from AI!",
  });
};

module.exports = bookSuggestions;
