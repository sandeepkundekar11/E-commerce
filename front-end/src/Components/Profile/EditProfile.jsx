import { useState } from "react";
import profileImg from "../../Images/E-Profile.png";
import Navbar from "../NavBar";
import ManageAddress from "./ManageAddess";
import ProfileComponent from "./ProfileComponent";
const EditProfile = () => {

  const [SelectedProfile, setSelectedProfile] = useState("PersonalInfo")
  const EditProfileArr = [
    {
      id: 1,
      title: "PersonalInfo",
      Comp: <ProfileComponent />
    },
    {
      id: 2,
      title: "manageAddress",
      Comp: <ManageAddress />
    }
  ]
  const ShowProfile = (profileTitle) => {
    let Component = EditProfileArr.find((ele) => ele.title === profileTitle)
    if (Component) {
      return Component.Comp
    }
    else {
      return <></>
    }
  }
  return (
    <>
      <Navbar />
      <div className="EditProfile flex h-full w-full flex-col justify-start bg-slate-200 px-4 md:flex-row md:justify-between md:pt-20 pt-36 pb-12">
        <div className="md:h-screen md:w-1/5">
          {/* Profle Img start */}
          <div className="relative flex h-16 w-full items-center bg-white mr-5 pl-2">
            <img className="h-12 w-12 rounded-full bg-gray-300" src="" alt="" />
            <input className="absolute h-12 w-12 opacity-0" type="file" />
            <div>
              <p className="ml-1 text-sm">Hello,</p>
              <h1 className="ml-1 text-base font-semibold">Sandeep Kundekar</h1>
            </div>
          </div>
          {/* <!-- Profle Img Ends --> */}
          <div className="mt-7 h-auto md:border-b-0 border-b-2 w-full bg-white md:h-80 p-2">
            <div className=" flex items-end w-full ">
              <img className="w-8 h-8" src={profileImg} alt="" />
              <p className="lg:text-base text-sm font-semibold ml-3">ACCOUNT SETTINGS</p>
            </div>

            <ul className="w-full m-auto space-y-2  mt-8">
              <li className={`text-start text-lg font-normal flex items-center cursor-pointer pl-11 w-full ${SelectedProfile === "PersonalInfo" && "bg-blue-100"}  h-12`} onClick={() => {
                setSelectedProfile("PersonalInfo")
              }}>
                Profile Information
              </li>
              <li className={`text-start text-lg font-normal flex items-center cursor-pointer pl-11 w-full ${SelectedProfile === "manageAddress" && "bg-blue-100 h-12"} `} onClick={() => {
                setSelectedProfile("manageAddress")
              }}>
                Manage Address
              </li>
            </ul>
          </div>
        </div>
        <div className="md:h-full w-full bg-white p-4 md:w-9/12">
          {/* <ProfileComponent /> */}
          {/* <ManageAddress/> */}
          {
            ShowProfile(SelectedProfile)
          }
        </div>
      </div>
    </>
  );
};
export default EditProfile;
