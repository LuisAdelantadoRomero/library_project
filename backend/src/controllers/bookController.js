const Book = require('../models/book')

const bookController = {
    getAllBooks: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch(error) {
            res.status(500).json({message: 'Failed to fetch books', error: error.message})
        }
    }
}