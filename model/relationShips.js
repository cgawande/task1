const {sequelize}= require("../config/config")
const User=require("./user.model")
const Products=require("./product.model")
const Category=require("./categoryModel")
const productImage=require("./imagesModel")


User.hasMany(Products);
Products.belongsTo(User);

Category.hasMany(Products);
Products.belongsTo(Category)

Products.hasMany(productImage);
productImage.belongsTo(Products)

sequelize.sync()