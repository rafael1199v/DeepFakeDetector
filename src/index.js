const express = require("express");
const TeachableMachine = require("@sashido/teachablemachine-node");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()});

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/y7M5yqnJ2/",
});

// https: var corsOptions = {
//     origin: "http://localhost:3000",
//     optionsSucessStatus: 200,
// };

const app = express();
const port = process.env.port || 3000;
//const cors = require('cors');

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send(`
        <form action="/image/classify" method="POST"">
            <p> Enter Image Url </p>
            <input name="ImageUrl" autocomplete=off type="text">
            <label>Enter image</label>
            <button> Predict Image </button>
        </form>
    `);
});

app.post(
  "/image/classify",
  bodyParser.raw({ type: ["image/jpg"], limit: "5mb" }),
  async (req, res) => {
    //const { Image } = req.body;
    console.log("Primero el buffer");
    console.log(req.body);
    console.log("Segundo la 'imagen'");
    //console.log(Image);

    return model
      .classify({
        imageUrl: req.body.ImageUrl,
      })
      .then((predictions) => {
        console.log(predictions);
        return res.json(predictions);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send("Something went wrong");
      });
  }
);


app.get("/me", (req, res) => {
    res.send(`
        <form action="/me/image" method="POST" enctype="multipart/form-data">
            <p> Enter Image Url </p>
            <input name="Image" type="file">
            <label>Enter image</label>
            <button> Predict Image </button>
        </form>
    `);
})

app.post(
  "/me/image",
  upload.single('Image'),
  async (req, res) => {
    console.log(req.file);
    // const { Image } = req.body;
    // console.log(Image);
    const imageBuffer = req.file.buffer;
    const contentTypes = req.file.mimetype;

    return model.classifyImage({
        image: imageBuffer,
        contentType: contentTypes
    })
    .then((predictions) => {
        console.log("Predicciones de la imagen");
        console.log(predictions);
        return res.json(predictions);
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send("Something went wrong 2");
    });
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
