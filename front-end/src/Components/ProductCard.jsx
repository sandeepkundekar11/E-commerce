import CardImg from "../Images/Shoping_card.png";
const ProductCard = ({ ProductSrc, ProductName, Price, discount }) => {
  return (
    <div className="relative productCard group overflow-hidden  m-1 mt-5 h-80 max-w-72 min-w-52 cursor-pointer rounded-md border transition-all duration-300 hover:scale-105 bg-white  hover:shadow-lg">
      <div className="img h-3/4">
        <img className="h-full w-full" src={ProductSrc} alt="" />
      </div>
      <div className="bg-slate-00 h-1/4 px-2 bg-white transition-all duration-200 group-hover:-translate-y-6">
        <h1 className="title font-semibold">{ProductName}</h1>
        <p className="text-sm">MacBook Pro 2021 with mini...</p>
        <div className="mt-1 flex items-center text-sm">
          <p className="font-medium">₹ {Price}</p>
          <p className="ml-3 text-sm text-green-600">{discount}% off</p>
        </div>
      </div>
      <div className="cardHover absolute left-9 top-40 h-10 w-24  bg-gray-600 flex items-center rounded-sm ">
        <div className="ShopingCard w-10 h-10 p-1 hover:bg-red-500 flex items-center">
          <img className="w-12 h-10" src={CardImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
