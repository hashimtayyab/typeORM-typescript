const express = require('express');
var router = express.Router();
const userController = require('./controller/userController.ts');
const profileController = require('./controller/profileController');

router.get('/users', userController.getUsers);
router.post('/user', userController.addUser);

router.get('/profile', profileController.getProfiles);
router.post('/profile/:userId', profileController.addProfile);

module.exports = router;