const imageService = require('../services/image.service');

async function classifyImageByUrl(req, res) {

    try {
        const url = req.body.ImageUrl;
        const result = await imageService.classifyByUrl(url);

        return res.json(result);
    }   
    catch(error) {
        res.status(500).json({ mesagge: `Error al clasificar la imagen. ${error.error}` });
    }
    
}

async function classifyImage(req, res) {


    try {
        const bufferData = req.file.buffer;
        const contentTypes = req.file.mimetype;

        const base64Image = bufferData.toString('base64');
        const imageUrl = `data:${contentTypes};base64,${base64Image}`;

        const result = await imageService.classifyImage(bufferData, contentTypes);

        return res.json({
            classificationResult: result,
            imageUrl: imageUrl
        });
    }
    catch(error) {
        return res.status(500).json({ message: `Error al clasificar la imagen. ${error.error}` });
    }
    
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