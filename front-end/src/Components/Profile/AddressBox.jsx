const AddressBox = () => {
  return (
    <div class="relative h-auto w-11/12 border p-3">
      <div class="flex">
        <h1 class="text-base font-semibold">Sandeep Kundekar</h1>
        <h1 class="ml-4 text-base">8217291928</h1>
      </div>
      <div class="mt-2">
        Hanuman Luxury PGq, 211, Hoodi Garden, Hoodi, Bengaluru, Karnataka -
        560048
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
