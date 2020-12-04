const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:String,
    organization:String,
    description:String,
    email:String,
    source:String
})

module.exports = mongoose.model('formData', formSchema);