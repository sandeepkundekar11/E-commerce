const AsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Usermodel, ProductsModel } = require("../model/connection");
// SigupApi
const Signup = AsyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    res.json({ message: "Please enter all details" });
  } else {
    let userExist = await Usermodel.findOne({ email: email });
    if (userExist) {
      res.json({ message: "User Already exist" });
    } else {
      let hashedPassword = await bcrypt.hashSync(password, 12);
      let token = jwt.sign({ email: email }, process.env.SECRET_KEY);
      let userData = {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      };
      let user = await Usermodel.create(userData);

      if (user) {
        res.json({
          user: user,
          auth: token,
        });
      }
    }
  }
});

// login api
const Login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({
      message: "Please enter all the details",
    });
  } else {
    let userExist = await Usermodel.findOne({ email: email });
    if (userExist) {
      let hashedpassword = bcrypt.compareSync(password, userExist.password);
      if (hashedpassword) {
        let token = jwt.sign({ email: email }, process.env.SECRET_KEY);
        res.json({
          user: userExist,
          auth: token,
        });
      } else {
        res.json({ message: "password does't match" });
      }
    } else {
      res.json({
        message: "User does't exist",
      });
    }
  }
});

// the following api will  get the product by id and return the related products

// http://localhost:8000/ecommerce/info/65f86cbabf8783e66e058b68    //GET request
const GetProduct = AsyncHandler(async (req, res) => {
  let product = await ProductsModel.findOne({ _id: req.params.id });
  let relatedProducts = await ProductsModel.find({
    category: product.category,
  });

  res.json({
    product: product,
    RealtedProducts: relatedProducts,
  });
});

// the following api will update the firstname,lastname and gender

// http://localhost:8000/ecommerce/updateInfo/65fdb9b73233bbad381f1838  // PUT request
const UpdatePersonalDetail = AsyncHandler(async (req, res) => {
  const { firstname, lastname, gender } = req.body;
  if (!firstname || !lastname || !gender) {
    res.json({ message: "please enter all details" });
  } else {
    let user = await Usermodel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstname: firstname,
          lastname: lastname,
          gender: gender,
        },
      }
    );

    if (user.acknowledged) {
      let userdeatil = await Usermodel.findOne({ _id: req.params.id });
      if (userdeatil) {
        res.json({
          message: "User updated successfully",
        });
      }
    }
  }
});

// following api is Updating the Email
// http://localhost:8000/ecommerce/updateEmail/65fdb9b73233bbad381f1838   // PUT reques
const UpdateEmail = AsyncHandler(async (req, res) => {
  let { email } = req.body;

  if (!email) {
    res.json({
      message: "please enter all details",
    });
  } else {
    let user = await Usermodel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          email: email,
        },
      }
    );

    if (user.acknowledged) {
      res.json({
        message: "Email Updated Successfully",
      });
    }
  }
});

// following api is updating the PhoneNumber

// http://localhost:8000/ecommerce/updatePhone/65fdb9b73233bbad381f1838  PUT request
const UpdatePhone = AsyncHandler(async (req, res) => {
  const { phone_no } = req.body;
  if (!phone_no) {
    res.json({
      message: "please Enter all the details",
    });
  } else {
    let phoneInfo = await Usermodel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          phone_no: phone_no,
        },
      }
    );

    if (phoneInfo.acknowledged) {
      res.json({ message: "Phone number is updated successfully" });
    }
  }
});

//In following api we are adding Addresses

// http://localhost:8000/ecommerce/addAddress/65fdb9b73233bbad381f1838   PUT request
const Addaddress = AsyncHandler(async (req, res) => {
  const { name, phone_number, pincode, locality, address } = req.body;
  if (!name || !phone_number || !pincode || !locality || !address) {
    res.json({
      massage: "Please enter all the details",
    });
  } else {
    let userAddress = await Usermodel.updateOne(
      { _id: req.params.id },
      {
        $push: {
          address: { name, phone_number, pincode, locality, address },
        },
      }
    );

    if (userAddress.acknowledged) {
      res.json({
        message: "Address added successfully",
      });
    }
  }
});

//  in the following api we are deleting the selected Address

// http://localhost:8000/ecommerce/deleteAddress? id=65fdb9b73233bbad381f1838 &&addressId=65fe7cef6dba152c76a2d344  PUT request
const DetateAddress = AsyncHandler(async (req, res) => {
  let user = await Usermodel.updateOne(
    { _id: req.query.id },
    {
      $pull: {
        address: { _id: req.query.addressId },
      },
    }
  );
  if (user.acknowledged) {
    res.json({ message: "Address deteted successfully" });
  }
});

// bellow in this code we are adding the Product card
// productImg: String,
// productname: String,
// discription: String,
// category: String,
// brand: String,
// price: Number,
// count: Number,

// http://localhost:8000/ecommerce/addCard/65fdb9b73233bbad381f1838     PUT request (userId )
const AddProductCard = AsyncHandler(async (req, res) => {
  const {
    productImg,
    productname,
    discription,
    category,
    brand,
    price,
    count,
    percentage,
  } = req.body;
  if (
    !productImg ||
    !productname ||
    !discription ||
    !category ||
    !brand ||
    !price ||
    !count ||
    !percentage
  ) {
    res.json({
      message: "Enter all the data",
    });
  } else {
    let ExistProduct = await Usermodel.findOne({
      _id: req.params.id,
      "ProductCard.productname": productname,
    });

    if (ExistProduct) {
      let user1 = await Usermodel.updateOne(
        {
          _id: req.params.id,
          "ProductCard.productname": productname,
        },
        {
          $inc: {
            "ProductCard.$.count": 1,
          },
        }
      );
      if (user1.acknowledged) {
        res.json({
          message: "Card added successfully",
        });
      }
    } else {
      let user = await Usermodel.updateOne(
        { _id: req.params.id },
        {
          $push: {
            ProductCard: {
              productImg,
              productname,
              discription,
              category,
              brand,
              price,
              count,
              percentage,
            },
          },
        }
      );
      if (user.acknowledged) {
        res.json({
          message: "Card added successfully",
        });
      }
    }
  }
});

// bellow we are incrementing the orderCount
// http://localhost:8000/ecommerce/count? id=65fdb9b73233bbad381f1838 &&productId=65fea9ecd1ac2d0200d8eb97  PUT request
const OrderCount = AsyncHandler(async (req, res) => {
  let user = await Usermodel.updateOne(
    { _id: req.query.id, "ProductCard._id": req.query.productId },
    {
      $inc: {
        "ProductCard.$.count": 1,
      },
    }
  );
  if (user.acknowledged) {
    res.json({
      message: "Product add successfully",
    });
  }
});

// bellow we are Decrementing the orderCount
// http://localhost:8000/ecommerce/Decount? id=65fdb9b73233bbad381f1838 &&productId=65fea9ecd1ac2d0200d8eb97  PUT request
const DeCount = AsyncHandler(async (req, res) => {
  let user = await Usermodel.updateOne(
    { _id: req.query.id, "ProductCard._id": req.query.productId },
    {
      $inc: {
        "ProductCard.$.count": -1,
      },
    }
  );
  if (user.acknowledged) {
    res.json({
      message: "Product Removed successfully",
    });
  }
});

// bellow we are writing the code to create the DeleteProductCard
// http://localhost:8000/ecommerce/deleteCard? id=65fdb9b73233bbad381f1838 && productId=65fea9ecd1ac2d0200d8eb97  PUT request
const DeleteCard = AsyncHandler(async (req, res) => {
  let user = await Usermodel.updateOne(
    { _id: req.query.id },
    {
      $pull: {
        ProductCard: { _id: req.query.productId },
      },
    }
  );

  if (user.acknowledged) {
    res.json({ message: "Product deleted successfully" });
  }
});

// Bellow we are write a code to get All details of User
const UserData = AsyncHandler(async (req, res) => {
  let user = await Usermodel.findOne({ _id: req.params.id });
  res.json(user);
});

module.exports = {
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
};
