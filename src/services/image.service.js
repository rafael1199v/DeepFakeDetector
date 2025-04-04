const model = require('../utils/teachable.machine');
const sharp = require('sharp');

async function classifyImage(imageBuffer, contentTypes) {
    
    const resizedImageBuffer = await sharp(imageBuffer)
      .resize(224, 224)
      .toFormat('jpeg')
      .toBuffer();
    
    return await model.classifyImage({
        image: resizedImageBuffer,
        contentType: contentTypes
    })
    .then((predictions) => {
        return predictions;
    })
    .catch((error) => {
       return Promise.reject(error)
    });
}

async function classifyByUrl(imageURL) {

    return await model.classify({
        imageUrl: imageURL
    })
    .then((predictions) => {
        return predictions;
    })
    .catch((error) => {
        return Promise.reject(error);
    })
}


module.exports = {
    classifyByUrl,
    classifyImage
}