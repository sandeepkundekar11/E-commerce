import ProfileComponent from "./ProfileComponent";
import profileImg from "../Images/E-Profile.png";
const EditProfile = () => {
  return (
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
        <div className="mt-7 h-14 w-full bg-white md:h-80 p-2">
          <div className=" flex items-end w-full ">
            <img className="w-9 h-9" src={profileImg} alt="" />
            <p className="text-xl font-semibold ml-3">ACCOUNT SETTINGS</p>
          </div>

          <ul className="w-full m-auto space-y-2  mt-8">
            <li className="text-start text-xl font-normal flex items-center cursor-pointer pl-11 w-full hover:bg-blue-100 h-12">
              Profile Information
            </li>
            <li className="text-start text-xl font-normal flex items-center cursor-pointer pl-11 w-full hover:bg-blue-100 h-12">
              Manage Address
            </li>
          </ul>
        </div>
      </div>
      <div className="md:h-full w-full bg-white p-4 md:w-9/12">
        {/* <ProfileComponent /> */}
      </div>
    </div>
  );
};
export default EditProfile;
