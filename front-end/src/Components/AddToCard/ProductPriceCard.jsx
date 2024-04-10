const ProductPriceCard = ({
  productCount,
  TotalOriginalPrice,
  DiscountPrice,
  TotalProductPrice,
}) => {
  return (
    <div class="PriceCard sticky top-14  w-full bg-white md:ml-7 md:w-96">
      <div class="PriceHead flex h-12 w-full items-center justify-start border p-2 text-lg font-semibold text-gray-600">
        PRICE DETAILS
      </div>

      <ul class="w-full space-y-2 border-b-2 px-2">
        <li class="flex h-10 w-full items-center justify-between text-base font-medium">
          <p>Price({productCount} item)</p>
          <p>₹{TotalOriginalPrice}</p>
        </li>
        <li class="flex h-10 w-full items-center justify-between text-base font-medium">
          <p>Discount</p>
          <p class="text-green-700">-₹{DiscountPrice}</p>
        </li>
        <li class="flex h-10 w-full items-center justify-between text-base font-medium">
          <p>Delivary Charges</p>
          <p>
            <del class="divide-dashed">₹40</del>
            <span class="ml-2 text-green-900">Free</span>
          </p>
        </li>
      </ul>
      {/* <!-- Total Price --> */}
      <li class="mb-1 mt-2 flex h-10 w-full items-center justify-between border-b-2 px-2 py-4 text-lg font-semibold">
        <p>Total Amount</p>
        <p>₹ {TotalProductPrice}</p>
      </li>

      {/* <!-- saved Price --> */}
      <div class="w-full px-2 py-3 font-medium text-green-800">
        You will save ₹{DiscountPrice} on this order
      </div>
    </div>
  );
};
export default ProductPriceCard;
