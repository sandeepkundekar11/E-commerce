const AddressBox = ({name,phone_number,pincode,address}) => {
  return (
    <div class="relative h-auto w-11/12 border p-3 mt-2">
      <div class="flex">
        <h1 class="text-base font-semibold">{name}</h1>
        <h1 class="ml-4 text-base">{phone_number}</h1>
      </div>
      <div class="mt-2">
        {address} -
        {pincode}
      </div>

      {/* <!-- hover icon --> */}
      <div class="absolute right-1 top-1 flex group ">
        <div class="w-20 h-16 -mr-4 bg-white shadow-lg drop-shadow invisible group-hover:visible"></div>
        <img
          class=" h-7"
          src="https://img.icons8.com/material-outlined/24/menu-2.png"
          alt="menu-2"
        />
      </div>
    </div>
  );
};
export default AddressBox;
