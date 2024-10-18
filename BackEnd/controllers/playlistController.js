const Playlist = require('../models/Playlist');

// Crear una playlist
exports.createPlaylist = async (req, res) => {
    try {
        const { name, songs } = req.body;
        const newPlaylist = new Playlist({ name, songs });
        await newPlaylist.save();
        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la playlist' });
    }
};

// Editar una playlist
exports.updatePlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!playlist) return res.status(404).json({ error: 'Playlist no encontrada' });
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar la playlist' });
    }
};

// Eliminar una playlist
exports.deletePlaylist = async (req, res) => {
    try {
        await Playlist.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Playlist eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la playlist' });
    }
};

// Agregar una canción a la playlist
exports.addSongToPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) return res.status(404).json({ error: 'Playlist no encontrada' });
        playlist.songs.push(req.body.songId);
        await playlist.save();
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar la canción a la playlist' });
    }
};

// Quitar una canción de la playlist
exports.removeSongFromPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id);
        if (!playlist) return res.status(404).json({ error: 'Playlist no encontrada' });
        playlist.songs = playlist.songs.filter(songId => songId.toString() !== req.body.songId);
        await playlist.save();
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ error: 'Error al quitar la canción de la playlist' });
    }
};
