const mongoose = require('mongoose')
const { Schema } = mongoose

const newspaperSchema = new Schema({
    title: String, 
    author: String, 
    date: String, 
    image: String, 
    text: [String], 
    category: String
})

const Newspaper = mongoose.model('Newspaper', newspaperSchema)
module.exports = Newspaper

