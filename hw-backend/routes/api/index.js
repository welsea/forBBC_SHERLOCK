const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/notes');
const imgsController = require('../../controllers/imgs');
const ficsController = require('../../controllers/fics');
const msgsController = require('../../controllers/msgs');
const videosController = require('../../controllers/videos');



//notes
router.get('/notes', notesController.all);
// router.get('/notes/:id', notesController.byId);
router.post('/notes', notesController.create);
router.put('/notes/:id', notesController.update);
router.delete('/notes/:id', notesController.remove);

//imgs
router.get('/imgs', imgsController.all);
router.get('/imgs/sort', imgsController.sortBy);
// router.get('/imgs/:id', imgsController.byId);
router.post('/imgs', imgsController.create);
router.put('/imgs/:id', imgsController.update);
router.delete('/imgs/:id', imgsController.remove);

//fic
router.get('/fics', ficsController.all);
router.get('/fics/sort', ficsController.sortBy);
// router.get('/fics/:id', ficsController.byId);
router.post('/fics', ficsController.create);
router.put('/fics/:id', ficsController.update);
router.delete('/fics/:id', ficsController.remove);

//video
router.get('/videos', videosController.all);
router.get('/videos/sort', videosController.sortBy);
// router.get('/videos/:id', videosController.byId);
router.post('/videos', videosController.create);
router.put('/videos/:id', videosController.update);
router.delete('/videos/:id', videosController.remove);

//msg
router.get('/msgs', msgsController.all);
router.get('/msgs/sort', msgsController.sortBy);
// router.get('/msgs/:id', msgsController.byId);
router.post('/msgs', msgsController.create);
router.put('/msgs/:id', msgsController.update);
router.delete('/msgs/:id', msgsController.remove);



module.exports = router;