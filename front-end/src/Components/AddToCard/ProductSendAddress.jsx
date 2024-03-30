const ProductSendAddress = ({ name, phone_no, address }) => {
  return (
    <div class="address mt-2 bg-white">
      <div class="h-auto w-full border p-3">
        <div class="flex">
          <h1 class="text-base font-semibold">{name}</h1>
          <h1 class="ml-4 text-base">{phone_no}</h1>
        </div>
        <div class="mt-2">{address}</div>
      </div>
    </div>
  );
};
export default ProductSendAddress;
