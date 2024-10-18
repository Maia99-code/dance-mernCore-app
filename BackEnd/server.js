const express = require('express');
const mongoose = require('mongoose');
const songRoutes = require('./routes/songRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/songs', songRoutes);
app.use('/playlists', playlistRoutes);

mongoose.connect('mongodb://localhost:27017/musicDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error al conectar a MongoDB', err));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
