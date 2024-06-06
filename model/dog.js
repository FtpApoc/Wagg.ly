const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: String,
    breed: String,
    location: String
});

//will pluralise and search for 'dogs'
const dogModel = mongoose.model('dog',dogSchema);

module.exports = {dogDB: dogModel};