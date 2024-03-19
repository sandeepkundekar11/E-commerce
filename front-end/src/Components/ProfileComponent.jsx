const ProfileComponent = () => {
  return (
    <>
      {/* <!-- Persanol Information start --> */}
      <div className="PerosnalInfo">
        <div className="personalDetailHead flex items-end">
          <h1 className="text-2xl font-medium text-gray-600">
            Personal Information
          </h1>
          <button className="ml-6 text-lg font-medium text-blue-600">
            Edit
          </button>
        </div>

        <div className="nameInputs mt-8 flex">
          <input
            className="h-11 w-2/4 bg-blue-50 pl-3 outline-none md:w-2/5"
            type="text"
            name=""
            id=""
            placeholder="First name"
          />
          <input
            className="ml-5 h-11 w-2/4 bg-blue-50 pl-3 outline-none md:w-2/5"
            type="text"
            name=""
            id=""
            placeholder="Last name"
          />
        </div>
        <h1 className="mt-4 text-lg font-medium text-gray-600">Your Gender</h1>
        <div className="GenderRadioBtns mt-3 flex">
          {/* <!-- male --> */}
          <div className="flex items-center">
            <input
              className="h-5 w-5 appearance-none rounded-full border-2 p-1 checked:bg-blue-800"
              type="radio"
              name="Gender"
              id=""
            />
            <p className="ml-2 text-lg text-gray-600">Male</p>
          </div>
          {/* <!-- female --> */}
          <div className="ml-4 flex items-center">
            <input
              className="h-5 w-5 appearance-none rounded-full border-2 p-1 checked:bg-blue-800"
              type="radio"
              name="Gender"
              id=""
            />
            <p className="ml-2 text-lg text-gray-600">Female</p>
          </div>
        </div>
      </div>
      {/* <!-- Personal information ends  --> */}
      {/* <!-- Email Address Start --> */}
      <div className="EmailAddressChange mt-6">
        <div className="EmailHead mt-4 flex items-end">
          <h1 className="text-2xl font-medium text-gray-600">Email Address</h1>
          <button className="ml-6 text-lg font-medium text-blue-600">
            Edit
          </button>
        </div>
        <input
          type="text"
          className="mt-5 h-11 w-9/12 bg-blue-50 pl-3 outline-none md:w-2/5"
          name=""
          id=""
        />
      </div>
      {/* <!-- Email Address Ends --> */}
      {/* <!-- password start --> */}
      <div className="PassowrdChange mt-6">
        <div className="EmailHead mt-4 flex items-end">
          <h1 className="text-2xl font-medium text-gray-600">Mobile Number</h1>
          <button className="ml-6 text-lg font-medium text-blue-600">
            Edit
          </button>
        </div>
        <input
          type="text"
          className="mt-5 h-11 w-9/12 bg-blue-50 pl-3 outline-none md:w-2/5"
          placeholder="+911234567892"
          name=""
          id=""
        />
      </div>
      {/* <!-- password ends --> */}

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
    </>
  );
};
export default ProfileComponent;
