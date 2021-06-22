const express = require("express");
const { BookModel } = require("../models/Books");

const router = express.Router();

router.get("/", async () => {
  try {
    console.log(BookModel);
  } catch (error) {
    res.status(500).json({ message: "nmadur xatode backendda" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, author, tags, isPublished } = req.body;
    const checkBook = await BookModel.findOne({ name });
    if (checkBook) {
      res.status(400).json({
        name,
        message: "bu kitob bor",
      });
    } else {
      const newBook = await new BookModel({
        name,
        author,
        tags,
        isPublished,
      });
      await newBook.save();
      res.status(201).json({
        message: "yangi kitob yaratildi",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "nmadur xatode backendda" });
  }
});

module.exports.bookRouter = router;
