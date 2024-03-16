import Banner from "../Images/FilterBanner.jpg";
import { Brands, Categories, Prices } from "../constants";
import FilterComp from "./FilterComp";
const SideFilter = () => {
  return (
    <div className="sideFilter absolute  md:top-16 top-32 mt-1  w-60 bg-gray-200 shadow-2xl pl-3">
      {/* filter banner */}
      <div className="FilterHeadBanner w-full bg-white ">
        <img src={Banner} className="w-full h-40" alt="" />
        <div className="p-2">
          <h1 className="text-lg text-black font-semibold">Spoyl Teens</h1>
          <p className="text-sm text-gray-700 font-medium">
            Youthfull vibes from 100₹{" "}
          </p>
        </div>
      </div>
      {/* filter start */}
      <div className="w-full pl-2  mt-2 bg-white border-b border-gray-300 pb-2">
        <h1 className="text-start text-xl text-gray-800 font-medium">
          Filters
        </h1>
        <div className="selectedFilterContainer w-full"></div>
      </div>

      <div className="w-full pt-2 pl-1.5 bg-white">
        <FilterComp Title={"PRICE"} FilterArr={Prices} />
      </div>
      <div className="w-full pt-2 pl-1.5 bg-white">
        <FilterComp Title={"BRAND"} FilterArr={Brands} />
      </div>
      <div className="w-full pt-2 pl-1.5 bg-white pb-1">
        <FilterComp Title={"CATEGORY"} FilterArr={Categories} />
      </div>
    </div>
  );
};
export default SideFilter;
