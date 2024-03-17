const ProductCard = ({ProductSrc,ProductName,Price,discount}) => {
    return (
        <div className="relative productCard  m-1 mt-5 h-80 w-60 cursor-pointer rounded-md border transition-all duration-300 hover:scale-105 bg-white  hover:shadow-lg">
            <div className="img h-3/4">
                <img className="h-full w-full" src={ProductSrc} alt="" />
            </div>
            <div className="bg-slate-00 h-1/4 px-2">
                <h1 className="title font-semibold">{ProductName}</h1>
                <p className="text-sm">MacBook Pro 2021 with mini...</p>
                <div className="mt-1 flex items-center text-sm">
                    <p className="font-medium">₹ {Price}</p>
                    <p className="ml-3 text-sm text-green-600">{discount}% off</p>
                </div>
            </div>
            <div className="cardHover absolute left-9 top-40 h-10 w-48 rounded bg-gray-200 "></div>
        </div>

    )
}
export default ProductCard