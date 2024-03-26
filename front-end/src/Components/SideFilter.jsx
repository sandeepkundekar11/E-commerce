import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cancel from "../Images/E-cancel.png";
import Banner from "../Images/FilterBanner.jpg";
import {
  ClearAllFilter,
  ClearFilter,
  GetAllProducts,
  SelectPrice,
  SetBrand,
  SetCategory,
} from "../Redux/Actions/Actions";
import { Brands, Categories, Prices } from "../constants";
import FilterComp from "./FilterComp";
const SideFilter = () => {
  const Dispatch = useDispatch();
  const BrandFilter = useSelector((state) => state.products.BrandFilter);
  const CategoryFilter = useSelector((state) => state.products.CategoryFilter);
  const PriceFilter = useSelector((state) => state.products.PriceFilter);

  useEffect(() => {
    Dispatch(GetAllProducts());
  }, [BrandFilter, CategoryFilter, PriceFilter]);
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
        <div className="flex justify-between items-center">
          <h1 className="text-start text-xl text-gray-800 font-medium">
            Filters
          </h1>
          {[...BrandFilter, ...CategoryFilter, ...PriceFilter].length > 0 && (
            <h1
              className="text-start text-base  text-blue-700 font-medium cursor-pointer"
              onClick={() => {
                Dispatch(ClearAllFilter());
              }}
              key={1}
            >
              CLEAR ALL
            </h1>
          )}
        </div>
        <div className="selectedFilterContainer w-full flex flex-wrap">
          {BrandFilter.map((ele) => {
            return (
              <div className="w-auto p-2 text-sm bg-slate-300 flex m-1 h-auto cursor-pointer rounded-md">
                <div>{ele}</div>
                <img
                  className="w-6 h-6  ml-1 hover:bg-slate-400 rounded-full"
                  src={cancel}
                  alt=""
                  onClick={() => {
                    Dispatch(ClearFilter(ele));
                  }}
                />
              </div>
            );
          })}
          {CategoryFilter.map((ele) => {
            return (
              <div className="w-auto p-2 text-sm bg-slate-300 m-1 flex h-auto cursor-pointer rounded-md">
                <div>{ele}</div>
                <img
                  className="w-6 h-6  ml-1 hover:bg-slate-400 rounded-full"
                  src={cancel}
                  alt=""
                  onClick={() => {
                    Dispatch(ClearFilter(ele));
                  }}
                />
              </div>
            );
          })}
          {PriceFilter.map((ele) => {
            return (
              <div className="w-auto p-2 text-sm bg-slate-300 m-1 flex h-auto cursor-pointer rounded-md">
                <div className="flex">
                  <div className="mr-2">{ele.start}₹</div>
                  <div>To</div>
                  <div className="ml-2">{ele.end}₹</div>
                </div>
                <img
                  className="w-6 h-6  ml-1 hover:bg-slate-400 rounded-full"
                  src={cancel}
                  alt=""
                  onClick={() => {
                    Dispatch(ClearFilter(ele));
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full pt-2 pl-1.5 bg-white">
        <FilterComp
          Title={"PRICE"}
          FilterArr={Prices}
          filter={PriceFilter}
          onHandleChange={(ele) => {
            Dispatch(SelectPrice(ele));
          }}
        />
      </div>
      <div className="w-full pt-2 pl-1.5 bg-white">
        <FilterComp
          Title={"BRAND"}
          FilterArr={Brands}
          onHandleChange={(ele) => {
            Dispatch(SetBrand(ele));
          }}
          filter={BrandFilter}
        />
      </div>
      <div className="w-full pt-2 pl-1.5 bg-white pb-1">
        <FilterComp
          Title={"CATEGORY"}
          FilterArr={Categories}
          onHandleChange={(ele) => {
            Dispatch(SetCategory(ele));
          }}
          filter={CategoryFilter}
        />
      </div>
    </div>
  );
};
export default SideFilter;
