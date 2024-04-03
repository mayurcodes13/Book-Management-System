# Book Management System

This project is a comprehensive book management system that integrates AI to provide personalized book suggestions. Developed using Node.js and Express, it interfaces with MongoDB for data storage and utilizes the OpenAI API for generating intelligent content recommendations.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete book entries in the MongoDB database.
- **AI-Enhanced Suggestions**: Leverages OpenAI's API to offer smart book recommendations based on the existing catalog.
- **RESTful API**: Provides a structured and intuitive endpoint layout for easy interaction with the system.
- **Postman Tested**: Ensures reliable API performance with extensive testing conducted via Postman.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **AI Integration**: OpenAI API
- **Development Tools**: Postman, nodemon

## Usage

- The application will start on `http://localhost:8000`.
- Use Postman or any other API client to interact with the available endpoints:
- `POST /api/books`: Create a new book entry.
- `GET /api/books`: Retrieve all book entries.
- `PATCH /api/books/{book_id}`: Update an existing book entry.
- `DELETE /api/books/{book_id}`: Delete a book entry.
- `GET /api/ai`: Get AI-generated book suggestions.
