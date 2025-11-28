const express = require("express");
const Quiz = require("../models/Quiz");
const router = express.Router();

router.post("/create", async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.json({ message: "Quiz saved" });
});

router.get("/", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

router.get("/:id", async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
});

module.exports = router;