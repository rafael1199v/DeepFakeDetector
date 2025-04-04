const express = require('express');
const app = express();
const cors = require('cors');
const imageRoutes = require('./routes/image.route');
const quizRoutes = require('./routes/quiz.route');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use('/', imageRoutes.router);
app.use('/', quizRoutes.router);

//Phones available
app.listen(PORT, localIP, () => {
    console.log(`Example app listening at http://${localIP}:${PORT}`);
});


//Local computer
// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`);
// })


