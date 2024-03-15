import SearchImg from "../Images/E-Search.png"
import Dropdown from "../Images/E-dropdown.png"
import card from "../Images/Shoping_card.png"
const Navbar = () => {
    return (
        <div className="w-screen bg-blue-700 flex h-16 items-center px-4">
            <div className="w-11/12 flex m-auto items-center">
                <div className="logoText w-56 ">
                    <h1 className="text-xl text-white font-bold">E-Shop</h1>
                    <p className="text-sm  -mt-2 text-white">Explore</p>
                </div>
                <div className="search_barContainer bg-blue-700 ">
                    <div className="searchBar flex md:ml-4 ml-0 bg-white">
                        <input type="text" className="lg:w-11/12 w-4/5 outline-none  pl-2 h-9 placeholder:text-base" placeholder="Search for products,brands and more.." name="" id="" />
                        <img className="searchIcon lg:w-1/12 w-20 float-end lg:px-3 px-5 py-1 h-9" src={SearchImg} alt="" />
                    </div>
                </div>
                <ul className=" flex ml-8 w-96 justify-around">
                    <li className=" profileContainer flex items-center  rounded-2x relative transition-all duration-200">
                        <div className="sm:text-lg font-medium text-white ">Sandeep</div>
                        <img className="w-3 h-3  ml-1.5 dropdownArrow transition-all duration-200" src={Dropdown} alt="" />

                        <div className="profileHover w-28 transition-all duration-200  md:h-32 h-20 bg-white shadow-2xl absolute top-8 -left-2"></div>
                    </li>
                    <li className="flex items-center relative ml-4">
                        <p className="CardNumbers absolute -top-2.5 flex justify-center items-center rounded-full w-5 h-5 bg-yellow-400 left-4">1</p>
                        <img className="w-11 h-9" src={card} alt="" />
                        <p className="font-medium  sm:text-lg text-white">Card</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar