const express=require("express")
const router=express.Router()
const userController=require("../controller/userController")
const bookController=require("../controller/bookController")


router.post("/register",userController.createUser)
router.post("/login",userController.createLogin)
router.post("/books",bookController.createBook)
router.get("/books",bookController.getBook)


module.exports=router