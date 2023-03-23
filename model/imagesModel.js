const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const productImage = sequelize.define("images", {
  imageName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    defaultValue:true
  }
});

module.exports = productImage;
