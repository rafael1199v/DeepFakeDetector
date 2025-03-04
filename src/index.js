const express = require('express');
const app = express();
const routes = require('./routes/image.route');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
//const localIP = '';

app.use(cors());

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

//Phones available
// app.listen(PORT, localIP, () => {
//     console.log(`Example app listening at http://${localIP}:${PORT}`);
// });


//Local computer
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})


