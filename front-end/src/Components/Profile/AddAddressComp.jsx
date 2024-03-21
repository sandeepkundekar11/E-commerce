const AddAddressComp = ({ onCancel, onSave }) => {
  return (
    <div class="mt-4 h-full md:w-11/12 w-full border bg-blue-100 p-4">
      <h1 class="text-bases font-medium text-blue-700">ADD A NEW ADDRESS</h1>
      {/* <!-- address 1 --> */}
      <div class="input1 mt-3 flex flex-col md:flex-row">
        <input
          class="h-12 md:w-80 w-11/12 rounded-lg border pl-3 outline-none placeholder:text-lg focus:border-blue-600"
          type="text"
          placeholder="Name"
        />
        <input
          class="mt-4 h-12 md:w-80 w-11/12 rounded-lg pl-3 text-lg focus:border-blue-600 outline-none md:ml-6 md:mt-0"
          type="text"
          placeholder="10-digit mobile number"
        />
      </div>
      {/* <!-- Address2 --> */}
      <div class="input1 mt-5 flex flex-col md:flex-row">
        <input
          class="h-12 md:w-80 w-11/12 rounded-lg border pl-3 text-lg outline-none focus:border-blue-600"
          placeholder="Pincode"
          type="text"
        />
        <input
          class="mt-4 h-12 md:w-80 w-11/12 rounded-lg pl-3 text-lg md:ml-6 md:mt-0 focus:border-blue-600 outline-none"
          type="text"
          placeholder="Locality"
        />
      </div>

      {/* <!-- Address textarea --> */}
      <textarea
        class="mt-6 h-28 md:w-80 w-11/12 rounded-lg p-3 outline-none focus:border-blue-600"
        placeholder="Address (area and street)"
      ></textarea>

      {/* <!-- save and cancel buttons --> */}
      <div class="mt-6 flex">
        <button class="h-11 w-36 rounded-lg border bg-blue-600 text-center text-lg text-white hover:bg-blue-500">
          SAVE
        </button>

        <button
          class="ml-8 h-11 w-32 font-medium text-blue-600"
          onClick={onCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};
export default AddAddressComp;
