const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walkerSchema = new Schema({
    name: String,
    location: String
});

//will pluralise and search for 'walkers'
const walkerModel = mongoose.model('walker',walkerSchema);

module.exports = {walkerDB: walkerModel};