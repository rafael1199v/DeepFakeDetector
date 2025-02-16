const TeachableMachine = require('@sashido/teachablemachine-node');

const model = new TeachableMachine({
    modelUrl: 'https://teachablemachine.withgoogle.com/models/y7M5yqnJ2/'
});

module.exports = model;
