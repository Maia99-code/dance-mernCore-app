const express = require('express');
const { createSong, updateSong, deleteSong, getSongs } = require('../controllers/songController');

const router = express.Router();

router.post('/', createSong);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);
router.get('/', getSongs);

module.exports = router;
