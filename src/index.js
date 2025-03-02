const express = require('express');
const app = express();
const routes = require('./routes/image.route');
const cors = require('cors');
const { isMethodSignature, getAllJSDocTags } = require('typescript');

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})

