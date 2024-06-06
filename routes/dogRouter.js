const express = require('express');
const dogController = require('../controllers/dogController');

const router = express.Router();

//Retrieve Dogs
router.get('/get', dogController.consoleTest, dogController.getDogs);

router.get('/', dogController.showPage);

router.post('/', dogController.addDog);

module.exports = router;