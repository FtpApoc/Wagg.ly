//requiring of mongoose and a schema to map to NoSQL results
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//data expected from MongoDB 'walkers' collection
const walkerSchema = new Schema({
    name: String,
    location: String
});

//will pluralise and search for 'walkers'
const walkerModel = mongoose.model('walker',walkerSchema);

module.exports = {walkerDB: walkerModel};