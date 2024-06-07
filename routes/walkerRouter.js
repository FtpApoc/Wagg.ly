const express = require('express');
const walkerController = require('../controllers/walkerController');

const router = express.Router();

//Retrieve Dogs
router.get('/get', walkerController.consoleTest, walkerController.getWalkers);

router.get('/', walkerController.showPage);

router.post('/', walkerController.addWalker);

module.exports = router;