// src/controllers/comicBooksController.js
const ComicBook = require("../models/ComicBook");

// Create a new comic book
exports.createComicBook = async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).json(comicBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a comic book
exports.updateComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!comicBook) {
      return res.status(404).json({ message: "Comic Book not found" });
    }
    res.json(comicBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a comic book
exports.deleteComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook) {
      return res.status(404).json({ message: "Comic Book not found" });
    }
    res.json({ message: "Comic Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch all comic books with pagination, filtering, and sorting
exports.fetchComicBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "bookName", filter = {} } = req.query;
    const query = {};

    if (filter.authorName) {
      query.authorName = new RegExp(filter.authorName, "i"); // case insensitive
    }
    if (filter.yearOfPublication) {
      query.yearOfPublication = filter.yearOfPublication;
    }
    if (filter.condition) {
      query.condition = filter.condition;
    }
    if (filter.price) {
      query.price = { $lte: filter.price };
    }

    const comicBooks = await ComicBook.find(query)
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await ComicBook.countDocuments(query);

    res.json({
      comicBooks,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get comic book details by ID
exports.getComicBookDetails = async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) {
      return res.status(404).json({ message: "Comic Book not found" });
    }
    res.json(comicBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
