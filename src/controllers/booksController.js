const { count } = require("console")
const booksModel = require("../models/booksModel")


    const createBooks = async function (req ,res){
    let data = req.body
    let saveData = await booksModel.create(data)
    res.send ({msg : saveData})}
 
    const booksData = async function(req ,res){
        let allBooks = await booksModel.find({sales:{$eq:10}}).skip(3*page-1).limit(3)
        res.send({msg : allBooks})}


module.exports.createBooks = createBooks
module.exports.booksData = booksData











