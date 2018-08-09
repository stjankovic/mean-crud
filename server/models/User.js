const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        defualt: Date.now
    }
});

//export data
module.exports = User = mongoose.model('user', UserSchema);