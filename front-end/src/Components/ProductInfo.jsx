import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AddTocradImg from "../Images/Shoping_card.png";
import { GetApiProductInfo } from "../Redux/Actions/ProductInfoAction";
import Loader from "./Loader";
import Navbar from "./NavBar";
import ProductCard from "./ProductCard";
import { PostApiCardToCard } from "../Redux/Actions/ProductAction";

const ProductInfo = () => {
  const Navigate = useNavigate();
  const { ProductInfo, ProductInfoLoading, ProductInfoError } = useSelector(
    (state) => state.ProductInfo
  );
  const { ProductCardData, ProductCardLoading, ProductCardErr } = useSelector(
    (state) => state.CardProduct
  );

  const [SelectedTempImg, setSelectedTempImg] = useState(null);
  const dispatch = useDispatch();
  const [PageInfo, setPageInfo] = useState({
    product: null,
    relatedArray: [],
  });
  let { id } = useParams();
  useEffect(() => {
    dispatch(GetApiProductInfo(id));
  }, [id]);

  useEffect(() => {
    setPageInfo({
      product: ProductInfo?.product,
      relatedArray: ProductInfo?.RealtedProducts,
    });
  }, [ProductInfo, id]);
  return (
    <>
      <Navbar />
      <div className="md:pt-20 pt-36 pb-28 w-full h-full bg-slate-200">
        {/*Product Container start */}
        <div class="m-auto flex md:flex-row flex-col h-3/4 w-11/12 bg-white ">
          <div class="Productinfo  h-full md:w-2/5">
            {/* Products Images */}
            <div class="TotalProductCards w-full h-full ">
              <img
                class="w-full h-4/5"
                src={
                  SelectedTempImg === null
                    ? PageInfo?.product?.thumbnail
                    : SelectedTempImg
                }
                alt=""
              />
              <div className="w-80  h-1/5 flex items-center justify-center ml-4">
                <button
                  className=" p-4 w-full h-12 rounded-md group hover:relative bg-yellow-500 hover:bg-yellow-400 flex items-center "
                  onClick={() => {
                    let ProductInfo = {
                      productImg: PageInfo.product?.thumbnail,
                      productname: PageInfo.product?.title,
                      discription: PageInfo.product?.description,
                      category: PageInfo.product?.category,
                      brand: PageInfo.product?.brand,
                      price: PageInfo.product?.price,
                      count: PageInfo.product?.count || 1,
                      percentage: PageInfo.product?.discountPercentage,
                    };
                    let UserId = JSON.parse(localStorage.getItem("user"))._id;
                    dispatch(PostApiCardToCard(UserId, ProductInfo));
                    setTimeout(() => {
                      Navigate("/checkout");
                    }, 1000);
                  }}
                >
                  <img
                    className="w-12 h-10 group-hover:absolute group-hover:translate-x-60 ease-linear transition-all duration-700"
                    src={AddTocradImg}
                    alt=""
                  />
                  <p className="text-xl font-bold ml-3">ADD TO CARD</p>
                </button>
              </div>
            </div>
          </div>
          {/* Products Info Container */}
          <div class="productDetails h-auto md:w-1/2 p-4">
            {/*Product name */}
            <h1 class="text-xl font-bold text-gray-400">
              {PageInfo?.product?.title}
            </h1>
            {/* Product Info */}
            <p class="mt-3 text-xl font-medium text-gray-700">
              {PageInfo?.product?.description}
            </p>

            <h1 class="mt-3 text-base font-medium text-green-700">
              Special price
            </h1>

            {/* Products price discount */}
            <div class="flex items-baseline">
              <p class="mt-2 text-2xl font-semibold">
                {PageInfo.product?.price}₹
              </p>
              <del class="ml-2 text-xl font-medium text-gray-500">
                {Math.floor(
                  (PageInfo.product?.price / 100) *
                    PageInfo.product?.discountPercentage
                )}
                ₹
              </del>
              <span class="ml-4 font-semibold text-green-600">
                {PageInfo.product?.discountPercentage} off
              </span>
            </div>
            {/* Products ratings */}
            <div class="Stars flex w-16 justify-evenly mt-7 rounded-3xl items-center bg-green-400">
              <span class="text-xl">
                {Math.floor(PageInfo.product?.rating)}{" "}
              </span>
              <img
                class="w-5 ml-2 h-5"
                src="https://img.icons8.com/ios/50/000000/star--v1.png"
                alt="star--v1"
              />
            </div>

            {/* All products images */}
            <div class="mt-9 flex flex-wrap md:gap-3 gap-1">
              {PageInfo.product?.images.map((img) => {
                return (
                  <div
                    onMouseOver={() => {
                      setSelectedTempImg(img);
                    }}
                    onMouseOut={() => {
                      setSelectedTempImg(null);
                    }}
                    class=" w-44 transition-all duration-300 hover:scale-110  hover:-translate-y-4 h-28 border hover:border-2 hover:border-blue-700 bg-slate-600"
                  >
                    <img className="w-full h-full" src={img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Products container Ends here */}

        <div className="RelatedProducts mt-16  md:w-11/12 m-auto">
          <h1 className="font-semibold text-3xl mb-2 text-gray-700">
            Related Products
          </h1>

          <div className="w-full grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2">
            {PageInfo.relatedArray?.map((ele) => {
              return (
                <ProductCard
                  Price={ele.price}
                  ProductName={ele.title}
                  ProductSrc={ele.thumbnail}
                  discount={ele.discountPercentage}
                  ProductClick={() => {
                    Navigate(`/productInfo/${ele._id}`);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {ProductInfoLoading && <Loader />}
      {ProductCardLoading && <Loader />}
    </>
  );
};
export default ProductInfo;
