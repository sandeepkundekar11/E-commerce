import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApiAddress } from "../../Redux/Actions/AddressActions";
import { GetALLApidata } from "../../Redux/Actions/AllDataAction";
import Tosters from "../../Toaster";
import Loader from "../Loader";
import AddAddressComp from "./AddAddressComp";
import AddressBox from "./AddressBox";
const ManageAddress = () => {
  const [showAddAddress, setShowAddress] = useState(false);
  const dispatch = useDispatch();
  const { Success } = Tosters();
  const { addressData, addressLoading, addressErr } = useSelector(
    (state) => state.UserAddress
  );
  const { userData, userDataLoading, userDataErr } = useSelector(
    (state) => state.AllData
  );
  useEffect(() => {
    let userID = JSON.parse(localStorage.getItem("user"))._id;
    dispatch(GetALLApidata(userID));
  }, [addressData]);

  return (
    <>
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
            key={Date.now()}
            onCancel={() => {
              setShowAddress(false);
            }}
            onSave={(data) => {
              let userId = JSON.parse(localStorage.getItem("user"))._id;
              dispatch(GetApiAddress(userId, data));
              setShowAddress(false);
              Success(addressData?.message || "User updated successfully");
            }}
          />
        )}

        {/* <!-- available addresses conatiner --> */}
        <div class="mt-8 w-full">
          {/* <!-- address card --> */}
          {userData?.address.length > 0
            ? userData?.address.map((ele) => {
                return (
                  <AddressBox
                    address={ele.address}
                    name={ele.name}
                    pincode={ele.pincode}
                    phone_number={ele.phone_number}
                  />
                );
              })
            : ""}
        </div>
      </div>
      {
        // this loader we are adding for loading addAddress
        addressLoading && <Loader />
      }
      {
        // this loader we are adding for Loading all userdata
        userDataLoading && <Loader />
      }
    </>
  );
};
export default ManageAddress;
