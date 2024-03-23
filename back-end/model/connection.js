const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_SRC)
  .then(() => {
    console.log("database is  connected successfully");
  })
  .catch(() => {
    console.log("error in database");
  });

const AddressSchema = new mongoose.Schema({
  name: String,
  phone_number: String,
  pincode: String,
  locality: String,
  address: String,
});

const ProductCardSchema = new mongoose.Schema({
  productImg: String,
  productname: String,
  discription: String,
  category: String,
  brand: String,
  price: Number,
  count: Number,
});
const Userschema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  phone_no: String,
  address: [AddressSchema],
  gender: String,
  ProductCard: [ProductCardSchema],
});

// Products schema

const ProductsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: String,
  rating: Number,
  stock: String,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

const Usermodel = mongoose.model("user", Userschema);
const ProductsModel = mongoose.model("products", ProductsSchema);
module.exports = { Usermodel, ProductsModel };
