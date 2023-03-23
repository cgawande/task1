const UserModel = require("../model/user.model");
const CategoryModel = require("../model/categoryModel");
const ProductModel = require("../model/product.model");
const { Op } = require('sequelize');

const addProduct = async (req, res) => {
  try {
    const {userId}=req.params
    const isUserExist = await UserModel.findByPk(req.params.userId);
    if (isUserExist) {
      const categoryName = { categoryName: req.body.categoryName};
      let body = {...req.body,UserId:userId,productImage:req.file.path}
      const addCategory = await CategoryModel.create({...categoryName});
      body.categoryId=addCategory.id
      const productDetails = await ProductModel.create(body);
      res.status(201).json({
        message: true,
        message: "Product added successfully",
        user: productDetails,
        category: addCategory,
      });
    } else {
      res.status(404).json({
        message: false,
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: false,
      message: "Error occured " + err.message,
    });
  }
};

const getProductList = async (req, res) => {
  try {
    const productList = await ProductModel.findAll({ include:CategoryModel});
    res.status(200).json({
      message: true,
      message: "Product list fetch successfully",
      user:productList,
    });
  } catch (err) {
    res.status(400).json({
      message: false,
      message: "Error occured " + err.message,
    });
  }
};

const searchProductBycategory=async(req,res)=>{
  try{
    const productList = await ProductModel.findAll({
      include:CategoryModel,
    });
    res.status(200).json({
      message: true,
      message: "Product list fetch successfully",
      user:productList,
    });
  }catch(err){
    res.status(400).json({
      message: false,
      message: "Error occured " + err.message,
    });
  }
}

module.exports = { addProduct,getProductList,searchProductBycategory};
