import { useDispatch, useSelector } from "react-redux";
// import data from "../app.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllProducts, GetApiProducts } from "../Redux/Actions/Actions";
import Loader from "./Loader";
import Navbar from "./NavBar";
import PaginationComp from "./PaginationComp";
import ProductCard from "./ProductCard";
import SideFilter from "./SideFilter";
const Home = () => {
  const { E_Products, ProductLoading, ProductErr } = useSelector((state) => state.Products)
  const Products = useSelector((state) => state.products.AllProducts);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [PaginationArr, setPaginationArr] = useState([]);
  // bellow block we are using for the setting per page product number
  const [Pagination, setPagination] = useState({
    start: 0,
    end: 10,
  });

  useEffect(() => {
    dispatch(GetApiProducts())
  }, [])
  useEffect(() => {
    dispatch(GetAllProducts(E_Products)); // getting all the products based on categories,brand and ,price and inside that  i am sending api response
    let Totalpages = Math.floor(Products?.length / 10)
    let arr = [];

    // calculating the total numbers of pages
    for (let i = 0; i < Totalpages; i++) {
      arr.push({
        tab: i,
        color: i === 0 ? "bg-blue-500" : "transperent",
      });
    }
    setPaginationArr(arr);
  }, [Products?.length, dispatch, E_Products]);


  useEffect(() => {
    let auth = JSON?.parse(localStorage.getItem("auth"))
    if (!auth) {
      Navigate("/")
    }
  }, [])
  return (
    <>
      <div className="w-full h-full ">
        <SideFilter />
        <Navbar />
        <div className="homePage  grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2">
          {Products?.map((ele, index) => {
            let eleIndex = index + 1;
            if (eleIndex > Pagination.start && eleIndex <= Pagination.end) {
              return (
                <ProductCard
                  key={index}
                  ProductClick={() => Navigate(`/productInfo/${ele._id}`)}
                  ProductSrc={ele.thumbnail}
                  ProductName={ele.title}
                  Price={ele.price}
                  discount={ele.discountPercentage}
                />
              );
            }
          })}
        </div>

        {/* pagination Container */}
        <PaginationComp
          PaginationArr={PaginationArr}
          prePage={() => {
            setPagination({
              start: Pagination.start - 10,
              end: Pagination.end - 10,
            });
            let page = PaginationArr.find((ele) => {
              return ele.tab * 10 === Pagination.start;
            });
            console.log(page);
            // setting the pagination color Dynamically
            setPaginationArr((arr) => {
              return arr.map((ele) => {
                if (ele?.tab + 1 === page?.tab) {
                  return { ...ele, color: "bg-blue-500" };
                } else {
                  return { ...ele, color: "bg-white" };
                }
              });
            });
          }}
          nextPage={() => {
            setPagination({
              start: Pagination.start + 10,
              end: Pagination.end + 10,
            });
            let page = PaginationArr.find((ele) => {
              return ele.tab * 10 === Pagination.end;
            });
            // setting the pagination color Dynamically
            setPaginationArr((arr) => {
              return arr.map((ele) => {
                if (ele?.tab === page?.tab) {
                  return { ...ele, color: "bg-blue-500" };
                } else {
                  return { ...ele, color: "bg-white" };
                }
              });
            });
          }}
          // this function will get called on every page button click
          onTabClick={(ele) => {
            setPagination({
              start: ele.tab === 0 ? ele.tab * 10 + 1 : ele.tab * 10,
              end: ele.tab * 10 + 10,
            });

            // setting the color of the tabs
            setPaginationArr((tabs) => {
              return tabs.map((obj) => {
                if (obj.tab === ele.tab) {
                  return { ...obj, color: "bg-blue-500" };
                } else {
                  return { ...obj, color: "white" };
                }
              });
            });
          }}
          // hiding the prepage button when our page start is ==0
          showPrepage={Pagination.end !== Math.floor(Products?.length / 10)}
          // hiding the  next page button when our page end is 100
          shownextpage={
            Pagination.end !== Math.floor(Products?.length / 10) * 10
          }
        />

        {/* Loader */}
        {
          ProductLoading && <Loader />
        }
        {/* <Loader /> */}
      </div>
    </>
  );
};
export default Home;
