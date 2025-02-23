const express = require('express');
const app = express();
const routes = require('./routes/image.route');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})

