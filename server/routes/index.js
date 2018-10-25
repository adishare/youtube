var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/',(req,res)=>{res.status(200).send('Youtube')})

router.post('/register',UserController.register);
router.post('/login',UserController.login);

router.use('/users',require('./UserRoutes.js'));
router.use('/videos',require('./VideoRoutes.js'));


module.exports = router;
