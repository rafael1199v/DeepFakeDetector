async function getQuiz(req, res) {

    try {
        const quizData = require('../data/quiz.json');
        return res.json(quizData);
    }
    catch(error) {
        return res.status(500).json({ message: `Error al enviar el quiz. ${error}` });
    } 

}


module.exports = {
    getQuiz
}

