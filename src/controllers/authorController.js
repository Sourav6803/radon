const { count } = require("console")
const authorModel = require("../models/authorModel")

const createAuthor = async function (req ,res){
    let data = req.body
    let saveData = await authorModel.create(data)
    res.send ({msg : saveData})
}  


//  If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)


 const authorData1 = async function(req ,res){
    let allAuthor = await authorModel.find({author_id : 8})
    if (allAuthor) res.send({msg: allAuthor1})
    
     else res.send({msg : "no authors found"})}

    //  List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )


const authorData = async function(eeq,res){
    let allAuthor = await authorModel.find({author_name : "Chetan Bhagat"})
    res.send({msg : allAuthor})
}


const getBooksData= async function (req, res) {
    //let allBooks= await BookModel.find()
    let allBooks= await BookModel.find({sales: {$eq: 10}}).skip(3 * page-1).limit(3)
    res.send({msg: allBooks})
}

const bookList = async function(req, res){
      let list = await BookModel.find().select({bookName: 1, authorName: 1})
      res.send(list)
}
const getBooksInYear = async function(req, res){
    let y = req.params.year
    let book = await BookModel.find({year: y})
    res.send(book)


}
const getINRBooks = async function(req, res){
      let price = req.params.price
      let list = await BookModel.find({prices: {indianPrice: price}})
      res.send(list)

}


module.exports.createAuthor = createAuthor
module.exports.authorData = authorData