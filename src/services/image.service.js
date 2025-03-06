const model = require('../utils/teachable.machine');

async function classifyImage(imageBuffer, contentTypes) {
    
    return await model.classifyImage({
        image: imageBuffer,
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