const { DataTypes } = require('sequelize');
const {sequelize}= require("../config/config")


const Products = sequelize.define('product', {
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productImage:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive:{
      type: DataTypes.BOOLEAN,
      defaultValue:true
    }
  });
  
  module.exports= Products