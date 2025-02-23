const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/image.controller');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});


router.get('/', controller.home);

router.get('/img', controller.homeImage);

router.post('/api/classify/url', 
            bodyParser.raw({ type: ["image/jpg"], limit: "5mb" }),
            controller.classifyImageByUrl);

router.post('/api/classify/image',
            upload.single('Image'),
            controller.classifyImage);

module.exports = router;