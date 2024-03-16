import { useRef, useState } from "react";
import Search from "../Images/E-Search.png";
import dropdown from "../Images/E-b-dropdown.png";
const FilterComp = ({ Title, FilterArr = [] }) => {
  const [SearchedFilter, setSerchedFilter] = useState("");
  const [PopupSearch, setPoupSearch] = useState("");
  const collapseRef = useRef(null);
  const [showPopup, setShowpopup] = useState(false);
  return (
    <div className="w-full border-b border-gray-300 pb-2">
      <div className="w-11/12 flex justify-between">
        <h1 className="font-medium">{Title}</h1>
        {FilterArr.length > 5 && (
          <img
            className="w-4 h-4 "
            onClick={() => {
              setShowpopup(false);
              if (collapseRef.current.classList.contains("h-0")) {
                collapseRef.current.classList.remove("h-0");
                collapseRef.current.classList.add("h-54");
              } else {
                collapseRef.current.classList.add("h-0");
                collapseRef.current.classList.remove("h-54");
              }
            }}
            src={dropdown}
            alt=""
          />
        )}
      </div>
      <div className="filterBody relative">
        {FilterArr.length > 5 ? (
          <div className="w-full">
            <div
              className="w-full pt-2 h-0  m-auto overflow-hidden ease-linear transition-all duration-300"
              ref={collapseRef}
            >
              <div className="FilterSearch flex items-center justify-center bg-white border-b w-11/12 border-gray-300 mb-3 ">
                <img className="w-4 h-4 p-0 mr-1" src={Search} alt="" />
                <input
                  value={SearchedFilter}
                  onChange={(e) => {
                    setSerchedFilter(e.target.value);
                  }}
                  type="text"
                  className="w-9/12  m-auto -ml-0.5 border-none outline-none text-base"
                  placeholder={`Search ${Title.toLowerCase()}`}
                />
              </div>
              {FilterArr.filter((ele) => {
                return ele.toLowerCase().includes(SearchedFilter);
              }).map((ele, index) => {
                if (index < 6) {
                  return (
                    <div className="flex w-full items-center" key={index}>
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2"
                        name=""
                        id=""
                      />
                      <div className="flex">{ele}</div>
                    </div>
                  );
                } else if (index === 6) {
                  return (
                    <div>
                      <p
                        className="font-medium text-blue-600 text-sm cursor-pointer"
                        onClick={() => {
                          setShowpopup(!showPopup);
                        }}
                      >
                        {FilterArr.length - 6} More
                      </p>
                      {/* search Popup */}
                      {showPopup && (
                        <div className="morePopup w-64 h-96  absolute bg-white left-60 -top-10 shadow-2xl p-3 overflow-hidden">
                          <div className="FilterSearch flex items-center justify-center bg-white border-b w-11/12 border-gray-300 ">
                            <img
                              className="w-4 h-4 p-0 mr-1"
                              src={Search}
                              alt=""
                            />
                            <input
                              value={PopupSearch}
                              onChange={(e) => {
                                setPoupSearch(e.target.value);
                              }}
                              type="text"
                              className="w-9/12  m-auto -ml-0.5 border-none outline-none text-base"
                              placeholder={`Search ${Title.toLowerCase()}`}
                            />
                          </div>
                          <div className="overflow-scroll h-full">
                            {FilterArr.filter((ele) => {
                              return ele.toLowerCase().includes(PopupSearch);
                            }).map((ele) => {
                              return (
                                <div
                                  className="flex w-full items-center"
                                  key={index}
                                >
                                  <input
                                    type="checkbox"
                                    className="w-4 h-4 mr-2"
                                    name=""
                                    id=""
                                  />
                                  <div className="flex">{ele}</div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <div className="w-full pt-2">
            {FilterArr.map((ele) => {
              return (
                <div className="flex w-full items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2"
                    name=""
                    id=""
                  />
                  <div className="flex">
                    <div className="mr-2">{ele.start}₹</div>
                    <div>To</div>
                    <div className="ml-2">{ele.end}₹</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default FilterComp;
