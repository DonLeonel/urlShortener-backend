const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

//app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

//Requerimos la ruta.
const urlRouter = require('./routes/urlRouter');

//Usamos la ruta requerida.
app.use(urlRouter);

const _PORT = process.env.PORT || 3000;
app.listen(_PORT ,() => {console.log(_PORT);});