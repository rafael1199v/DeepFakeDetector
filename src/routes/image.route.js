const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});

const imageController = require('../controllers/image.controller');
const quizController = require('../controllers/quiz.controller');


router.get('/', imageController.home);

router.get('/img', imageController.homeImage);

router.get('/api/quiz', quizController.getQuiz);

router.post('/api/classify/url', 
            bodyParser.raw({ type: ["image/*"], limit: "5mb" }),
            imageController.classifyImageByUrl);

router.post('/api/classify/image',
            upload.single('Image'),
            imageController.classifyImage);

module.exports = router;