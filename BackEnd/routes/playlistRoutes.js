const express = require('express');
const {
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
} = require('../controllers/playlistController');

const router = express.Router();

router.post('/', createPlaylist);
router.put('/:id', updatePlaylist);
router.delete('/:id', deletePlaylist);
router.put('/:id/add-song', addSongToPlaylist);
router.put('/:id/remove-song', removeSongFromPlaylist);

module.exports = router;
