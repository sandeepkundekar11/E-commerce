import { useDispatch, useSelector } from "react-redux";
// import data from "../app.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllProducts } from "../Redux/Actions";
import Navbar from "./NavBar";
import PaginationComp from "./PaginationComp";
import ProductCard from "./ProductCard";
import SideFilter from "./SideFilter";
const Home = () => {
  const Products = useSelector((state) => state.products.AllProducts);
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const [PaginationArr, setPaginationArr] = useState([])
  const [Pagination, setPagination] = useState({
    start: 1,
    end: 10
  })
  useEffect(() => {
    dispatch(GetAllProducts); // getting all the products based on categories,brand and ,price
    let Totalpages = Math.floor(Products.length / 10)
    let arr = []
    for (let i = 1; i <= Totalpages; i++) {
      arr.push(i)
    }
    setPaginationArr(arr)
  }, [Products.length, dispatch]);
  return (
    <div className="w-full h-full ">
      <SideFilter />
      <Navbar />
      <div className="homePage grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2">
        {Products.map((ele, index) => {
          let eleIndex = index + 1
          if (eleIndex >= Pagination.start && eleIndex <= Pagination.end) {
            return (
              <ProductCard
                ProductClick={() => Navigate("/productInfo")}
                ProductSrc={ele.thumbnail}
                ProductName={ele.title}
                Price={ele.price}
                discount={ele.discountPercentage}
              />
            );
          }
        })}
      </div>
      <PaginationComp PaginationArr={PaginationArr}/>
    </div>
  );
};
export default Home;
