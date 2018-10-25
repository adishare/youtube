var express = require('express');
var router = express.Router();
var VideoController = require('../controllers/VideoController.js');

router.get('/', VideoController.list);
router.get('/:id', VideoController.show);
router.post('/', VideoController.create);
router.post('/likes/:id/:userId', VideoController.like);

module.exports = router;
