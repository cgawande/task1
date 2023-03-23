const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config");

const Category = sequelize.define("categories", {
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    defaultValue:true
  }
});

module.exports = Category;
