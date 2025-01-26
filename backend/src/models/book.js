const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    min: 0, // Ensure the year is valid
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  edition: {
    type: String,
    enum: ['Physical', 'Digital'], // Only allow these values
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set when a book is added
  },
});

module.exports = mongoose.model('Book', bookSchema);
