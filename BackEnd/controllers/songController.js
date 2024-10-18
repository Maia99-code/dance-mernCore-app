const Song = require('../models/Song');

// Crear una canción
exports.createSong = async (req, res) => {
    try {
        const { title, artist, genre, album } = req.body;
        const newSong = new Song({ title, artist, genre, album });
        await newSong.save();
        res.status(201).json(newSong);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la canción' });
    }
};

// Editar una canción
exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!song) return res.status(404).json({ error: 'Canción no encontrada' });
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar la canción' });
    }
};

// Eliminar una canción
exports.deleteSong = async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Canción eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la canción' });
    }
};

// Obtener todas las canciones
exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las canciones' });
    }
};
