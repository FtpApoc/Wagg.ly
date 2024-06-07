//Similar to walkerRouter, Seperate to allow decoupled development and scaling
const express = require('express');
const dogController = require('../controllers/dogController');

const router = express.Router();

router.get('/get', dogController.consoleTest, dogController.getDogs);

router.get('/', dogController.showPage);

router.post('/', dogController.addDog);

module.exports = router;