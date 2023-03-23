const { DataTypes } = require('sequelize');
const {sequelize}= require("../config/config")

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    defaultValue:true
  }
});

module.exports=User