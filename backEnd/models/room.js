const mongoose = require('mongoose');
const roomSchema = mongoose.Schema({
    numberOfPlaces:String,
    availablity:Boolean,
});

const room = mongoose.model('Room', roomSchema);
module.exports = room;
