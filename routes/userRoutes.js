const express=require("express")
const router=express.Router()

const userController=require("../controller/user.controller")

router.post("/signup",userController.userSignUp)
router.post("/login",userController.userLogin)

module.exports=router

