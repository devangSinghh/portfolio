const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    
    title: {
        type:String,
        required:true,
        min:3,
        max:255
    },
    body: {
        type:String,
        required:true,
        min:3,
        max:1000
    },
    year:{
        type:String,
        required:true,
        min:3,
        max:4
    },
    position: {
        type:String,
        required:true
    }
});


module.exports = mongoose.model('dataItems', Schema);