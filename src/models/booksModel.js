const mongoose = require('mongoose')


const booksScheema = new mongoose.Schema({
    name: String,
    author_id : Number,
    price : Number,
    rating: Number,

},{ timestamps : true })

module.exports = mongoose.model('Books', booksScheema)








