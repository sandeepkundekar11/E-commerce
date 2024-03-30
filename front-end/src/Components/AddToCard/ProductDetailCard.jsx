const ProductDetailCard = ({
  Productname,
  ProductImg,
  count,
  discription,
  category,
  brand,
  price,
  percentage,
  ProductDecrease,
  ProductIncrease,
  DeleteCard,
}) => {
  return (
    <div class="addedProductsDetails mt-2 flex w-full  justify-normal border bg-white">
      <div class="ProductImage p-2">
        <img class="h-64 w-56" src={ProductImg} alt="" />
        <div class="productCounter mt-2 flex w-56 justify-between">
          {/* <!-- Reduce the count of the Products --> */}
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-slate-200"
            onClick={ProductDecrease}
          >
            -
          </button>
          <div class="flex h-10 w-16 items-center justify-center border">
            {count}
          </div>
          {/* <!-- Increase the count of the products --> */}
          <button
            class="flex h-10 w-10 items-center justify-center rounded-full border hover:bg-slate-200"
            onClick={ProductIncrease}
          >
            +
          </button>
        </div>
      </div>
      {/* <!-- product Info --> */}
      <div class="ProductDetails p-2">
        <h1 class="mb-2 text-xl font-bold">{Productname}</h1>
        <h1 class="text-xl font-normal">{discription}</h1>
        <h1 class="mt-2 text-lg font-medium text-gray-500">
          Category : {category}
        </h1>
        <h1 class="mt-2 text-lg font-medium text-gray-500">Brand : {brand}</h1>
        <p class="Price mt-5 flex items-center">
          <del class="font-medium text-gray-500">
            ₹{Math.round(price / (percentage / 100 - 1)) * -1}
          </del>
          <span class="ml-3 text-lg font-semibold">₹{price}</span>
          <span class="ml-3 font-semibold text-green-700">
            {" "}
            {percentage}% off
          </span>
        </p>
        <div class="AddtoCardButtons mt-4">
          <button class="w-36 rounded-lg border p-2 font-semibold hover:bg-blue-500">
            SAVE FOR LATER
          </button>
          <button
            class="ml-4 w-32 rounded-lg border p-2 font-semibold hover:bg-red-500"
            onClick={DeleteCard}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
