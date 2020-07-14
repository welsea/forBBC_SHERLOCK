var express = require('express');
var router = express.Router();
var ficModel = require('../model/fic');

/* GET fic listing. */
router.get('/', function (req, res, next) {
    res.send('from fic');
});


module.exports = router;