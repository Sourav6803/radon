const express = require('express');
const router = express.Router();
const authorModel = require("../models/authorModel")
const authorController = require("../controllers/authorController")
const booksController = require('../controllers/booksController')


router.get('/test-me', function(req,res){
    res.send("My first API")
})

// *******AUTHORS*********

router.post('/createAuthor', authorController.createAuthor)

router.get("/authorData", authorController.authorData)

// ********BOOKS***********

router.post('/createBooks' ,booksController.createBooks)

router.get('/booksData', booksController.booksData )


//MOMENT 
const moment = require('moment');
router.get("/dateManipulations", function (req, res){




    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;