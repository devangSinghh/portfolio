const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    projectHeading:String,
    projectDescription:String,
    img:String,
    projectBody:String,
    projectLink:String,
    type:String,
    githubRepo:String
})

module.exports = mongoose.model('projects', Schema);