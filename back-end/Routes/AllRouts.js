const express = require("express");
const Route = express.Router();
const { GetProducts } = require("../Controller/ProductsController");
const {
  Signup,
  Login,
  GetProduct,
  UpdatePersonalDetail,
  UpdateEmail,
  UpdatePhone,
  Addaddress,
  DetateAddress,
  AddProductCard,
  OrderCount,
  DeleteCard,
  UserData,
  DeCount,
} = require("../Controller/UserController");
Route.get("/allproducts", GetProducts);
Route.post("/signup", Signup);
Route.post("/login", Login);
Route.get("/info/:id", GetProduct);
Route.put("/updateInfo/:id", UpdatePersonalDetail);
Route.put("/updateEmail/:id", UpdateEmail);
Route.put("/updatePhone/:id", UpdatePhone);
Route.put("/addAddress/:id", Addaddress);
Route.put("/deleteAddress", DetateAddress);
Route.put("/addCard/:id", AddProductCard);
Route.put("/count", OrderCount);
Route.put("/Decount", DeCount);
Route.put("/deleteCard", DeleteCard);
Route.get("/userInfo/:id", UserData);
module.exports = Route;
