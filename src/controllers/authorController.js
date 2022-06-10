const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

//  The authorId is present in the request body. If absent send an error message that this detail is required


// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find({ authorId : 6})
//     if (! authors) res.send({ data : authors})
//    else  res.send({data: "not found authorId"})
// }

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.updateMany({ rating : { $gt :3.5} }  , {$set : { price : 60}})
   
    res.send({data : authors})}



module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData