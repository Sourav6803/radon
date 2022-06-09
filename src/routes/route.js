const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel")
const authorController = require("../controllers/authorController")
const booksController = require('../controllers/booksController')


router.


// *******AUTHORS*********
get('/test-me', function(req,res){
    res.send("My first API")
})
router.post('/createAuthor', authorController.createAuthor)

router.get("/authorData", authorController.authorData)
// ********BOOKS***********

router.post('/createBooks' ,booksController.createBooks)

router.get('/booksData', booksController.booksData )




module.exports = router;