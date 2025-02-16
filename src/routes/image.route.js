const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const controller = require('../controllers/image.controller');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});


router.get('/', controller.home);

router.get('/img', controller.homeImage);

router.post('/classify/url', 
            bodyParser.raw({ type: ["image/jpg"], limit: "5mb" }),
            controller.classifyImageByUrl);

router.post('/classify/image',
            upload.single('Image'),
            controller.classifyImage);

module.exports = router;