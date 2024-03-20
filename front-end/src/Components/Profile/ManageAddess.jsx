import { useState } from "react";
import AddAddressComp from "./AddAddressComp";
import AddressBox from "./AddressBox";

const ManageAddress = () => {
  const [showAddAddress, setShowAddress] = useState(false);
  return (
    <div class="h-full w-full p-4">
      <h1 class="text-xl font-semibold">Manage Addresses</h1>
      {/* <!-- add address button --> */}
      {!showAddAddress && (
        <button
          class="mt-4 flex h-14 w-10/12 items-center border-2"
          onClick={() => {
            setShowAddress(true);
          }}
        >
          <img
            class="h-10 w-10 ml-3"
            src="https://img.icons8.com/ios/50/plus-math--v1.png"
            alt="plus-math--v1"
          />
          <h1 class="ml-4 text-blue-700 font-medium">ADD A NEW ADDRESS</h1>
        </button>
      )}

      {/* <!-- form to add the address --> */}
      {showAddAddress && (
        <AddAddressComp
          onCancel={() => {
            setShowAddress(false);
          }}
        />
      )}

      {/* <!-- available addresses conatiner --> */}
      <div class="mt-8 w-full">
        {/* <!-- address card --> */}
        <AddressBox />
      </div>
    </div>
  );
};
export default ManageAddress;
