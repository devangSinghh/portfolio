const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    projectHeading:String,
    projectDescription:String,
    img:String,
    projectLink:String
})

module.exports = mongoose.model('projects', Schema);