const express=require("express")
const router=express.Router()
const {upload}=require("../middelware/multerMiddelware")
const {checkUserAuth}=require("../middelware/authMiddleware")
const productController=require("../controller/productController")

router.post("/add/:userId",checkUserAuth,upload.single("productImage"),productController.addProduct)
router.get("/list",productController.getProductList)
router.get("/search",productController.searchProductBycategory)
module.exports=router