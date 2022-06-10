const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

// ****The authorId is present in the request body. If absent send an error message that this detail is required


// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     if(!req.body.publisher || !req.body.mauthor) res.send({data : books})
//      else res.send({data: " authorid not found"})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find().populate('author')
//     res.send({data: books})
// }

// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const getBooksData= async function (req, res) {
let allBooks = await bookModel.updateOne( {rating : { $gt :3.5} }  , {$set : { price : 60}})
   
 res.send({data : allBooks})
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

} 


const putBook = async function (req,res){
    let newBooks = await bookModel.find()
    res.send({data : newBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.putBook = putBook