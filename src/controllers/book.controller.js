import { Book } from "../models/book.model.js"

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            status: true,
            msg: books
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getBooks }