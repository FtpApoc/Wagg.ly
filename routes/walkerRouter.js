//using express and walker controller to execute functions
const express = require('express');
const walkerController = require('../controllers/walkerController');

//locally created and used, imported elsewhere as walkerRouter
const router = express.Router();

//Retrieve Dogs
router.get('/get', walkerController.consoleTest, walkerController.getWalkers);

//Display page on GET route
router.get('/', walkerController.showPage);

//Add walker based on POST request found in WalkerAdd
router.post('/', walkerController.addWalker);

//exported to be used in app.js
module.exports = router;