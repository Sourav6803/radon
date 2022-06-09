const { count } = require("console")
const booksModel = require("../models/booksModel")


    const createBooks = async function (req ,res){
    let data = req.body
    let saveData = await booksModel.create(data)
    res.send ({msg : saveData})}
 
    const booksData = async function(req ,res){
        let allBooks = await booksModel.findOneAndUpdate({name : "Two States"} ,{ price : 100})
    
        res.send({msg : allBooks})}

    const priceBetweenBooks =async function(req,res){
        let allBooks = await booksModel.find({$or: [{price : {$gt :50}} , { price: {$lt : 100}}]})
    }
module.exports.createBooks = createBooks
module.exports.booksData = booksData











