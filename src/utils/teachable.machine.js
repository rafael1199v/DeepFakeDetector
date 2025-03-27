const TeachableMachine = require('@sashido/teachablemachine-node');

const model = new TeachableMachine({
    //modelUrl: 'https://teachablemachine.withgoogle.com/models/y7M5yqnJ2/'
    modelUrl: 'https://teachablemachine.withgoogle.com/models/6rkHFPTvY/'
});

module.exports = model;
