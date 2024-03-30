import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetALLApidata } from "../../Redux/Actions/AllDataAction";
import {
  EditUserApi,
  EditUserEmail,
  EditUserPhone,
} from "../../Redux/Actions/UserEditAction";
import Tosters from "../../Toaster";
import Loader from "../Loader";

const ProfileComponent = () => {
  const { Success } = Tosters();
  const dispatch = useDispatch();
  // getting  all the user data
  const { userData, userDataLoading } = useSelector((state) => state.AllData);
  const { editUserData, loadingEditUser, EditUserError } = useSelector(
    (state) => state.EditUser
  );
  const [enableuserInfo, setEnableUserInfo] = useState(false);
  const [enableuserEmail, setEnableUserEmail] = useState(false);
  const [enablePhone, setEnablephone] = useState(false);
  const [phoneWarning, setPhoneWarning] = useState("");
  const [UserEditWorning, setUserEditWarning] = useState("");
  // user edit data
  const [UserEditInfo, serUserEditInfo] = useState({
    firstname: "",
    lastname: "",
    gender: "",
  });

  // user Email
  const [UserEmail, setUserEmail] = useState("");
  // Phone number
  const [PhoneNumber, setphoneNumber] = useState("");
  useEffect(() => {
    let userID = JSON.parse(localStorage.getItem("user"))._id;
    dispatch(GetALLApidata(userID));
  }, []);

  useEffect(() => {
    serUserEditInfo({
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      gender: userData?.gender,
    });
    setUserEmail(userData?.email);
    setphoneNumber(userData?.phone_no);
  }, [userData]);
  return (
    <>
      {/* <!-- Persanol Information start --> */}
      <div className="PerosnalInfo">
        <div className="personalDetailHead flex items-end">
          <h1 className="text-xl font-medium text-gray-600">
            Personal Information
          </h1>

          {!enableuserInfo && (
            <button
              className="ml-6 text-lg font-medium text-blue-600"
              onClick={() => {
                setEnableUserInfo(true);
              }}
            >
              Edit
            </button>
          )}
        </div>

        <div className="nameInputs mt-8 flex">
          <input
            className={`h-11 w-2/4 bg-blue-50 pl-3 outline-none md:w-2/5 ${
              !enableuserInfo && "cursor-not-allowed"
            }`}
            type="text"
            name=""
            id=""
            value={UserEditInfo.firstname}
            onChange={(e) => {
              if (enableuserInfo) {
                serUserEditInfo({ ...UserEditInfo, firstname: e.target.value });
              }
            }}
            placeholder="First name"
          />
          <input
            className={`ml-5 h-11 w-2/4 bg-blue-50 pl-3 outline-none md:w-2/5 ${
              !enableuserInfo && "cursor-not-allowed"
            }`}
            type="text"
            name=""
            id=""
            value={UserEditInfo.lastname}
            onChange={(e) => {
              if (enableuserInfo) {
                serUserEditInfo({ ...UserEditInfo, lastname: e.target.value });
              }
            }}
            placeholder="Last name"
          />
        </div>
        <h1 className="mt-4 text-lg font-medium text-gray-600">Your Gender</h1>
        <div className="GenderRadioBtns mt-3 flex">
          {/* <!-- male --> */}
          <div className="flex items-center">
            <input
              className={`h-5 w-5 appearance-none rounded-full border-2 p-1 checked:bg-blue-800 ${
                !enableuserInfo && "cursor-not-allowed"
              }`}
              type="radio"
              name="Gender"
              checked={UserEditInfo.gender === "Male"}
              onClick={(e) => {
                if (enableuserInfo) {
                  serUserEditInfo({
                    ...UserEditInfo,
                    gender: "Male",
                  });
                }
              }}
              id=""
            />
            <p className="ml-2 text-lg text-gray-600">Male</p>
          </div>
          {/* <!-- female --> */}
          <div className="ml-4 flex items-center">
            <input
              className={`h-5 w-5 appearance-none rounded-full border-2 p-1 checked:bg-blue-800 ${
                !enableuserInfo && "cursor-not-allowed"
              }`}
              type="radio"
              name="Gender"
              checked={UserEditInfo.gender === "Female"}
              id=""
              onClick={(e) => {
                if (enableuserInfo) {
                  serUserEditInfo({
                    ...UserEditInfo,
                    gender: "Female",
                  });
                }
              }}
            />
            <p className="ml-2 text-lg text-gray-600">Female</p>
          </div>
        </div>
      </div>
      <p className="text-base text-red-600 font-normal mt-3">
        {UserEditWorning}
      </p>
      {/* edit user name and gender */}
      {enableuserInfo && (
        <EditButtons
          onCancel={() => {
            setEnableUserInfo(false);
          }}
          onEditSave={() => {
            if (
              UserEditInfo.gender !== "Male" &&
              UserEditInfo.gender !== "Female"
            ) {
              setUserEditWarning("Please add your Gender");
            } else if (
              Object.values(UserEditInfo).some((ele) => ele.length < 2)
            ) {
              setUserEditWarning("Please enter all data");
            } else {
              setUserEditWarning("");
              let userID = JSON.parse(localStorage.getItem("user"))._id;
              dispatch(EditUserApi(userID, UserEditInfo));
              setEnableUserInfo(false);
              Success("User Updated successfully");
            }
          }}
        />
      )}
      {/* <!-- Personal information ends  --> */}
      {/* <!-- Email Address Start --> */}
      <div className="EmailAddressChange mt-6">
        <div className="EmailHead mt-4 flex items-end">
          <h1 className="text-xl font-medium text-gray-600">Email Address</h1>
          {!enableuserEmail && (
            <button
              className="ml-6 text-lg font-medium text-blue-600"
              onClick={() => {
                setEnableUserEmail(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
        <input
          type="text"
          className={`mt-5 h-11 w-9/12 bg-blue-50 pl-3 outline-none md:w-2/5 ${
            !enableuserEmail && "cursor-not-allowed"
          }`}
          name=""
          id=""
          onChange={(e) => {
            if (enableuserEmail) {
              setUserEmail(e.target.value);
            }
          }}
          value={UserEmail}
          placeholder="Enter your email"
        />
      </div>
      {enableuserEmail && (
        <EditButtons
          onCancel={() => {
            setEnableUserEmail(false);
          }}
          onEditSave={() => {
            let userID = JSON.parse(localStorage.getItem("user"))._id;
            dispatch(EditUserEmail(userID, { email: UserEmail }));
            setEnableUserEmail(false);
            Success("User email updated successfully");
          }}
        />
      )}
      {/* <!-- Email Address Ends --> */}
      {/* <!-- phone start --> */}
      <div className="PassowrdChange mt-6">
        <div className="EmailHead mt-4 flex items-end">
          <h1 className="text-xl font-medium text-gray-600">Mobile Number</h1>
          {!enablePhone && (
            <button
              className="ml-6 text-lg font-medium text-blue-600"
              onClick={() => {
                setEnablephone(true);
              }}
            >
              Edit
            </button>
          )}
        </div>
        <input
          type="text"
          className={`mt-5 h-11 w-9/12 bg-blue-50 pl-3 outline-none md:w-2/5 ${
            !enablePhone && "cursor-not-allowed"
          }`}
          placeholder="+911234567892"
          name=""
          value={PhoneNumber}
          onChange={(e) => {
            if (enablePhone) {
              setphoneNumber(e.target.value);
            }
          }}
          id=""
        />
      </div>
      <p className="text-base text-red-600 font-normal mt-3">{phoneWarning}</p>
      {enablePhone && (
        <EditButtons
          onCancel={() => {
            setEnablephone(false);
          }}
          onEditSave={() => {
            let regex = /\D/;
            if (regex.test(PhoneNumber?.toString())) {
              setPhoneWarning(
                "Phone number should not contains any characters"
              );
            } else if (PhoneNumber.length <= 9) {
              setPhoneWarning("phone number should be of 10 digits");
            } else {
              setPhoneWarning("");
              let userID = JSON.parse(localStorage.getItem("user"))._id;
              dispatch(EditUserPhone(userID, { phone_no: PhoneNumber }));
              setEnableUserEmail(false);
              setEnablephone(false);
              Success("User phone number updated successfully");
            }
          }}
        />
      )}
      {/* <!-- phone ends --> */}

      <div className="FAQs mt-8">
        <h1 className="text-2xl font-semibold text-gray-700">FAQs</h1>
        <ul className="mt-3">
          <li className="text-lg font-medium">
            What happens when I update my email address (or mobile number)?
          </li>
          <li className="mt-2 text-base font-normal text-gray-700">
            Your login email id (or mobile number) changes, likewise. You'll
            receive all your account related communication on your updated email
            address (or mobile number).
          </li>
          <li className="mt-5 text-lg font-medium">
            When will my Flipkart account be updated with the new email address
            (or mobile number)?
          </li>
          <li className="mt-2 text-base font-normal text-gray-700">
            It happens as soon as you confirm the verification code sent to your
            email (or mobile) and save the changes.
          </li>
          <li className="mt-5 text-lg font-medium">
            What happens to my existing Flipkart account when I update my email
            address (or mobile number)?
          </li>
          <li className="mt-2 text-base font-normal text-gray-700">
            Updating your email address (or mobile number) doesn't invalidate
            your account. Your account remains fully functional. You'll continue
            seeing your Order history, saved information and personal details.
          </li>
        </ul>
      </div>

      <p className="mt-7 text-blue-800 font-semibold cursor-pointer">
        Deactivate account
      </p>

      {
        // this loading we are using for the Loading the User All data
        userDataLoading && <Loader />
      }
      {
        // this loader we are using for the Loading the edit User Info like firstname, lastname,and gender
        loadingEditUser && <Loader />
      }
      {}
    </>
  );
};
export default ProfileComponent;

// diffirent Component for the buttons
const EditButtons = ({ onEditSave, onCancel }) => {
  return (
    <div className="md:w-10/12 mt-4 flex justify-start">
      <button
        className="w-32 h-10 rounded-md bg-blue-300 hover:bg-blue-400 transition-all duration-200"
        onClick={onEditSave}
      >
        Save
      </button>
      <button
        className="w-32 h-10 ml-5 rounded-md bg-red-300 hover:bg-red-400 transition-all duration-200"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};
