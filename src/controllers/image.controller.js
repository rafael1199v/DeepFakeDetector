const imageService = require('../services/image.service');

async function classifyImageByUrl(req, res) {

    const url = req.body.ImageUrl;
    const result = await imageService.classifyByUrl(url);

    return res.json(result);
}

async function classifyImage(req, res) {

    // console.log(req.file);
    // console.log('Recibimos una imagen');

    // console.log('Tamaño del buffer:', req.file.buffer.length);
    // console.log('Tamaño del archivo:', req.file.size);

    const bufferData = req.file.buffer;
    const contentTypes = req.file.mimetype;

    const base64Image = bufferData.toString('base64');
    const imageUrl = `data:${contentTypes};base64,${base64Image}`;

    //console.log(imageUrl.substring(0, 100));

    const result = await imageService.classifyByUrl(imageUrl);

    //console.log(result);

    return res.json({
        classificationResult: result,
        imageUrl: imageUrl
    });
}


async function home(req, res){
    res.send(`
        <form action="api/classify/url" method="POST"">
            <p> Enter Image Url </p>
            <input name="ImageUrl" autocomplete=off type="text">
            <label>Enter image</label>
            <button> Predict Image </button>
        </form>
    `);
}

async function homeImage(req, res){
    res.send(`
        <form action="/classify/image" method="POST" enctype="multipart/form-data">
            <p> Enter Image Url </p>
            <input name="Image" type="file">
            <label>Enter image</label>
            <button> Predict Image </button>
        </form>
    `);
}


module.exports = {
    classifyImage,
    classifyImageByUrl,
    home,
    homeImage
}