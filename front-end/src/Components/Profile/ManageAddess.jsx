import { useState } from "react";

const ManageAddress = () => {
  const [showAddAddress, setShowAddress] = useState(false)
  return (
    <div class="h-full w-full p-4">
      <h1 class="text-xl font-semibold">Manage Addresses</h1>
      {/* <!-- add address button --> */}
      {
        !showAddAddress && <button class="mt-4 flex h-14 w-10/12 items-center border-2" onClick={()=>
        {
          setShowAddress(true)
        }}>
        <img class="h-10 w-10 ml-3" src="https://img.icons8.com/ios/50/plus-math--v1.png" alt="plus-math--v1" />
        <h1 class="ml-4 text-blue-700 font-medium">ADD A NEW ADDRESS</h1>
      </button>
      }

      {/* <!-- form to add the address --> */}
      {
        showAddAddress && <div class="mt-4 h-full md:w-11/12 w-full border bg-blue-100 p-4">
          <h1 class="text-bases font-medium text-blue-700">ADD A NEW ADDRESS</h1>
          {/* <!-- address 1 --> */}
          <div class="input1 mt-3 flex flex-col md:flex-row">
            <input class="h-12 md:w-80 w-11/12 rounded-lg border pl-3 outline-none placeholder:text-lg focus:border-blue-600" type="text" placeholder="Name" />
            <input class="mt-4 h-12 md:w-80 w-11/12 rounded-lg pl-3 text-lg focus:border-blue-600 outline-none md:ml-6 md:mt-0" type="text" placeholder="10-digit moble number" />
          </div>
          {/* <!-- Address2 --> */}
          <div class="input1 mt-5 flex flex-col md:flex-row">
            <input class="h-12 md:w-80 w-11/12 rounded-lg border pl-3 text-lg outline-none focus:border-blue-600" placeholder="Pincode" type="text" />
            <input class="mt-4 h-12 md:w-80 w-11/12 rounded-lg pl-3 text-lg md:ml-6 md:mt-0 focus:border-blue-600 outline-none" type="text" placeholder="Locality" />
          </div>

          {/* <!-- Address textarea --> */}
          <textarea class="mt-6 h-28 md:w-80 w-11/12 rounded-lg p-3 outline-none focus:border-blue-600" placeholder="Address (area and street)"></textarea>

          {/* <!-- save and cancel buttons --> */}
          <div class="mt-6 flex">
            <button class="h-11 w-36 rounded-lg border bg-blue-600 text-center text-lg text-white hover:bg-blue-500">SAVE</button>

            <button class="ml-8 h-11 w-32 font-medium text-blue-600" onClick={()=>
            {
              setShowAddress(false)
            }}>CANCEL</button>
          </div>
        </div>
      }

      {/* <!-- available addresses conatiner --> */}
      <div class="mt-8 w-full">
        {/* <!-- address card --> */}
        <div class="relative h-auto w-11/12 border p-3">
          <div class="flex">
            <h1 class="text-base font-semibold">Sandeep Kundekar</h1>
            <h1 class="ml-4 text-base">8217291928</h1>
          </div>
          <div class="mt-2">Hanuman Luxury PGq, 211, Hoodi Garden, Hoodi, Bengaluru, Karnataka - 560048</div>

          {/* <!-- hover icon --> */}
          <div class="absolute right-1 top-1 flex group ">
            <div class="w-20 h-16 -mr-4 bg-white shadow-lg drop-shadow invisible group-hover:visible"></div>
            <img class=" h-7" src="https://img.icons8.com/material-outlined/24/menu-2.png" alt="menu-2" />
          </div>
        </div>
      </div>
    </div>

  );
};
export default ManageAddress
