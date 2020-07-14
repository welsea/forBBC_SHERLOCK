const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/notes');

router.get('/notes', notesController.all);
// router.get('/notes/:id', notesController.byId);
router.post('/notes', notesController.create);
router.put('/notes/:id', notesController.update);
router.delete('/notes/:id', notesController.remove);


module.exports = router;