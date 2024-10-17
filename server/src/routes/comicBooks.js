const express = require("express");
const {
  createComicBook,
  updateComicBook,
  deleteComicBook,
  fetchComicBooks,
  getComicBookDetails,
} = require("../controllers/comicBooksController");

const router = express.Router();

router.post("/", createComicBook);

router.put("/:id", updateComicBook);

router.delete("/:id", deleteComicBook);

router.get("/", fetchComicBooks);

router.get("/:id", getComicBookDetails);

module.exports = router;
