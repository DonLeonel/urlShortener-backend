const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Requerimos la ruta.
const urlRouter = require('./routes/urlRouter');

//Usamos la ruta requerida.
app.use(urlRouter);

const _PORT = process.env.PORT || 3000;
app.listen(_PORT, () => console.log(`Servidor corriendo en: http://localhost:${_PORT}`));