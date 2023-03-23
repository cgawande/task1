const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = require("../model/user.model");

const userSignUp = async (req, res) => {
  try {
    const isUserExist = await UserModel.findOne({
      where: { email: req.body.email },
    });
    console.log(isUserExist);
    if (isUserExist) {
      res.status(409).json({
        message: false,
        message: "User is already exist",
      });
    } else {
      const password = await bcrypt.hash(req.body.password, 10);
      let body={...req.body,password:password}
      const userData = await UserModel.create(body);
      res.status(201).json({
        message: true,
        message: "User created successfully",
        user: userData,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: false,
      message: "Error occured " + err.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const isUserExist = await UserModel.findOne({
      where: { email: req.body.email },
    });
    if (!isUserExist) {
      res.status(404).json({
        success: false,
        message: "User with this email is not found",
      });
    } else {
      console.log(req.body.password,isUserExist.password)
      const isMatch = await bcrypt.compare( req.body.password,isUserExist.password);
      if (isMatch) {
        const token = jwt.sign(
          { userId: isUserExist.id },"secret_key",{ expiresIn: "5d" });
        res.cookie("jwt", token, { httpOnly: true });
        res.status(200).json({
          success: true,
          message: "User login successfully",
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid user password",
        });
      }
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error occured " + err.message,
    });
  }
};

module.exports={userSignUp,userLogin}

