import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import LogoutImg from "../Images/E-Logout.png";
import E_profile from "../Images/E-Profile.png";
import SearchImg from "../Images/E-Search.png";
import Dropdown from "../Images/E-dropdown.png";
import card from "../Images/Shoping_card.png";
const Navbar = ({Logout}) => {
  const products = useSelector((state) => state.products.AllProducts)
  const { E_Products, ProductLoading, ProductErr } = useSelector((state) => state.Products)
  const Navigate = useNavigate()
  const [SearchedProduct, setSearchedProduct] = useState("")
  return (
    <div className="w-screen bg-blue-700 flex h-16 items-center px-4 fixed top-0 z-40">
      <div className="w-11/12 flex m-auto items-center">
        <NavLink to="/home" className="logoText w-56 ">
          <h1 className="text-xl text-white font-bold">E-Shop</h1>
          <p className="text-sm  -mt-2 text-white">Explore</p>
        </NavLink>
        <div className="search_barContainer bg-blue-700 relative ">
          <div className="searchBar flex md:ml-4 ml-0 bg-white">
            <input
              type="text"
              className="lg:w-11/12 w-4/5 outline-none  pl-2 h-9 placeholder:text-base"
              placeholder="Search for products,brands and more.."
              name=""
              id=""
              onChange={(e) => {
                setSearchedProduct(e.target.value)
              }}
            />
            <img
              className="searchIcon lg:w-1/12 w-20 float-end lg:px-3 px-5 py-1 h-9"
              src={SearchImg}
              alt=""
            />
          </div>

          {
            SearchedProduct.length > 0 &&
            <div className="absolute space-y-2 searchProductDropdown pt-2  w-11/12 ml-4 px-1 bg-white shadow-2xl drop-shadow-2xl overflow-scroll min-h-0 max-h-80 ">
              {
                // adding the searched product dropdown
                E_Products?.filter((ele) => {
                  return ele.title.toLowerCase().includes(SearchedProduct) || ele.category.toLowerCase().includes(SearchedProduct)
                }).map((ele) => {
                  return <div className="w-full flex justify-start items-center h-12 cursor-pointer hover:bg-slate-200" onClick={() => {
                    Navigate(`/productInfo/${ele._id}`)
                    setSearchedProduct("")
                  }}>
                    <img className="h-4/5 w-12" src={ele.thumbnail} alt="" />
                    <div className="ml-2">
                      <div className=" pl-5 font-medium">{ele.title}</div>
                      <div className=" pl-5 text-sm text-blue-500 font-medium -mt-1">{ele.category}</div>
                    </div>
                  </div>
                })
              }
            </div>
          }
        </div>
        <ul className=" flex ml-8 w-96 justify-around">
          <li className=" profileContainer flex items-center  rounded-2x relative transition-all duration-200">
            <div className="sm:text-lg font-medium text-white ">Sandeep</div>
            <img
              className="w-3 h-3  ml-1.5 dropdownArrow transition-all duration-200"
              src={Dropdown}
              alt=""
            />

            <div className="profileHover w-36 transition-all duration-200  md:h-32 h-auto bg-white shadow-2xl absolute top-8 -left-2">
              <ul className="w-full">
                <NavLink
                  to="/profile"
                  className="flex items-center h-12 hover:bg-slate-100 p-1 mt-1 cursor-pointer"
                >
                  <img className="w-5 h-5" src={E_profile} alt="" />
                  <p className="text-base ml-2 font-semibold">My Profile</p>
                </NavLink>
                <li className="flex items-center h-12 hover:bg-slate-100 p-1 mt-1 cursor-pointer" onClick={()=>
                {
                  localStorage.removeItem("user")
                  localStorage.removeItem("auth")
                  Navigate("/")
                }}>
                  <img className="w-5 h-5" src={LogoutImg} alt="" />
                  <p className="text-base ml-2">Log Out</p>
                </li>
              </ul>
            </div>
          </li>
          <NavLink className="flex items-center relative ml-4" to="/checkout">
            <p className="CardNumbers absolute -top-3 flex justify-center items-center rounded-full w-5 h-5 bg-yellow-400 left-4">
              1
            </p>
            <img className="w-10 h-9" src={card} alt="" />
            <p className="font-medium  sm:text-lg text-white">Card</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
