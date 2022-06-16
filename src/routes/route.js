const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleWare/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users",  userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.validateToken,userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.post("/users/:userId/posts" , userController.postMessage)

router.delete("/users/:user-Id" ,auth.validateToken, userController.deleteUser)

module.exports = router;