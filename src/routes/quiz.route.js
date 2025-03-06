const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');

router.get('/api/quiz', quizController.getQuiz);

module.exports = {
    router
}