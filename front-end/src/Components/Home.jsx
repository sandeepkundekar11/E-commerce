import { useDispatch, useSelector } from "react-redux";
// import data from "../app.json";
import { useEffect } from "react";
import { GetAllProducts } from "../Redux/Actions";
import Navbar from "./NavBar";
import ProductCard from "./ProductCard";
import SideFilter from "./SideFilter";

const Home = () => {
  const Products = useSelector((state) => state.products.AllProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProducts); // getting all the products based on categories,brand and ,price
  }, [dispatch]);
  return (
    <div className="w-full h-full ">
      <SideFilter />
      <Navbar />
      <div className="homePage flex flex-wrap">
        {Products.map((ele) => {
          return (
            <ProductCard
              ProductSrc={ele.thumbnail}
              ProductName={ele.title}
              Price={ele.price}
              discount={ele.discountPercentage}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
