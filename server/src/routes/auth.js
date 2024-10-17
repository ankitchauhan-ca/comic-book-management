const express = require("express");
const {
  signup,
  signin,
  getUserDetails,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.get("/profile", protect, getUserDetails);

module.exports = router;
