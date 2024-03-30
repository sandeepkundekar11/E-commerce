import { useDispatch, useSelector } from "react-redux";
import Navbar from "../NavBar";
import EmptyCard from "./EmptyCard";
import ProductDetailCard from "./ProductDetailCard";
import ProductPriceCard from "./ProductPriceCard";
import ProductSendAddress from "./ProductSendAddress";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import { GetALLApidata } from "../../Redux/Actions/AllDataAction";
import {
  DecrementProductCount,
  IncreamentProductCount,
} from "../../Redux/Actions/ProductCountActions";
import Tosters from "../../Toaster";
import { DeleletProduct } from "../../Redux/Actions/DeleteAction";

const ProductsCheckoutComp = () => {
  const dispatch = useDispatch();
  const { ProductDataCount, ProductDataLoading } = useSelector(
    (state) => state.CardCount
  );

  // for delete address
  const { DeleteInfo, DeleteLoading } = useSelector(
    (state) => state.DeleteCard
  );
  const [OriginalPrice, setOriginalPrice] = useState(null);
  const [TotalDiscountPrice, setTotalDiscountPrice] = useState(null);
  const [ProductTotalPrice, SetProductsTotalPrice] = useState(null);
  const { userData, userDataLoading } = useSelector((state) => state.AllData);
  const { Success } = Tosters();
  useEffect(() => {
    // getting all user data
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    dispatch(GetALLApidata(userId));
  }, [dispatch, ProductDataCount, DeleteInfo]);

  useEffect(() => {
    // setting the total original price
    let TotalOriginalPrice = userData?.ProductCard.reduce((acc, cur) => {
      let percentage = cur.percentage;
      let originalPrice =
        Math.round(cur.price / (percentage / 100 - 1)) * cur?.count;
      acc += originalPrice;
      return acc;
    }, 0);
    setOriginalPrice(TotalOriginalPrice * -1); //converting nagetive numbeer to positive number

    // setting the total disocunt price
    let TotalDicountPrice = userData?.ProductCard.reduce((acc, cur) => {
      let percentage = cur.percentage;
      let originalPrice = Math.round(cur.price / (percentage / 100 - 1));
      let disocunt = Math.abs(originalPrice);
      let dicountPrice = (disocunt - cur.price) * cur?.count;
      acc += dicountPrice;
      return acc;
    }, 0);
    setTotalDiscountPrice(TotalDicountPrice);

    // Setting the Total Price
    console.log(OriginalPrice, "OriginalPrice");
    console.log(TotalDicountPrice, "TotalDicountPrice");
    SetProductsTotalPrice(OriginalPrice - TotalDicountPrice);
  }, [userData, DeleteInfo, ProductDataCount, OriginalPrice]);

  // Decrease count function
  const ProductDecrement = (ele) => {
    if (ele.count > 1) {
      let userId = JSON.parse(localStorage.getItem("user"))._id;
      dispatch(DecrementProductCount(userId, ele._id));
      Success("Product removed successfully");
    }
  };

  // increase count function
  const ProductIncrement = (ele) => {
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    dispatch(IncreamentProductCount(userId, ele._id));
    Success("Product added successfully");
  };

  // Delete Product function
  const DeleteProductCard = (ele) => {
    let userId = JSON.parse(localStorage.getItem("user"))._id;
    dispatch(DeleletProduct(userId, ele._id));
    Success(`${ele?.productname} deleted successfully`);
  };
  return (
    <>
      <Navbar />
      <div class="flex min-h-screen max-h-full w-full flex-wrap items-start justify-center m-auto bg-slate-300 p-2 pt-20">
        {/* <!-- added Product card --> */}
        {userData?.ProductCard?.length > 0 ? (
          <div class="addtoCard flex w-11/12 flex-col md:flex-row">
            <div class="ProductsCard h-auto w-full md:w-3/5">
              {/* <!-- head --> */}
              <div class="flex h-12 w-full items-center justify-center bg-white">
                <h1 class="-mb-3 w-60 border-b-2 border-b-blue-400 pb-1 text-center text-xl font-medium text-blue-500">
                  E-Shop
                </h1>
              </div>
              {/* <!-- address --> */}
              {userData?.address?.length >= 1 && (
                <ProductSendAddress
                  key={Date.now()}
                  address={userData?.address[0].address}
                  name={userData?.address[0].name}
                  phone_no={userData?.address[0].phone_number}
                />
              )}
              {/* <!--added Procuts Details --> */}
              <div className="w-full">
                {userData?.ProductCard?.map((ele, index) => {
                  return (
                    <ProductDetailCard
                      key={index}
                      ProductImg={ele?.productImg}
                      Productname={ele?.productname}
                      brand={ele?.brand}
                      category={ele?.category}
                      count={ele?.count}
                      discription={ele?.discription}
                      percentage={ele?.percentage}
                      price={ele?.price}
                      ProductDecrease={() => {
                        ProductDecrement(ele);
                      }}
                      ProductIncrease={() => {
                        ProductIncrement(ele);
                      }}
                      DeleteCard={() => {
                        DeleteProductCard(ele);
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* <!-- price Card --> */}
            <div>
              <ProductPriceCard
                productCount={userData?.ProductCard?.length}
                TotalOriginalPrice={OriginalPrice}
                DiscountPrice={TotalDiscountPrice}
                TotalProductPrice={ProductTotalPrice}
                key={Date.now()}
              />
            </div>
          </div>
        ) : (
          <EmptyCard />
        )}
      </div>

      {/* this loading we are using to load the All product info */}
      {userDataLoading && <Loader />}

      {/* this loader we are using to load the productCount */}
      {ProductDataLoading && <Loader />}

      {/* this loader we are using to load the Delete Product card */}
      {DeleteLoading && <Loader />}
    </>
  );
};

export default ProductsCheckoutComp;
