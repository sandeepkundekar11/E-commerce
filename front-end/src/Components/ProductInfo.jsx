import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { GetApiProductInfo } from "../Redux/Actions/ProductInfoAction"
import Loader from "./Loader"
import Navbar from "./NavBar"
import ProductCard from "./ProductCard"

const ProductInfo = ({ ImageArray = [1, 2, 3, 4] }) => {


    const Navigate=useNavigate()
    const { ProductInfo, ProductInfoLoading, ProductInfoError } = useSelector((state) => state.ProductInfo)
    const dispatch = useDispatch()
    const [PageInfo, setPageInfo] = useState({
        product: null,
        relatedArray: []
    })
    let { id } = useParams()
    useEffect(() => {
        dispatch(GetApiProductInfo(id))
    }, [id])

    useEffect(() => {
        setPageInfo({
            product: ProductInfo?.product,
            relatedArray: ProductInfo?.RealtedProducts
        })
        console.log(ProductInfo)
    }, [ProductInfo])
    return (
        <>
            <Navbar />
            <div className="md:pt-20 pt-36 w-full h-full bg-slate-100">
                {/*Product Container start */}
                <div class="m-auto flex md:flex-row flex-col h-3/4 w-11/12 border-2 bg-white ">
                    <div class="Productinfo  h-full md:w-2/5">
                        {/* Products Images */}
                        <div class="TotalProductCards w-full h-full border"><img class="w-full h-full" src={PageInfo?.product?.thumbnail} alt="" /></div>
                    </div>
                    {/* Products Info Container */}
                    <div class="productDetails h-auto md:w-1/2 p-4">
                        {/*Product name */}
                        <h1 class="text-xl font-bold text-gray-400">{PageInfo?.product?.title}</h1>
                        {/* Product Info */}
                        <p class="mt-3 text-xl font-medium text-gray-700">{PageInfo?.product?.description}</p>

                        <h1 class="mt-3 text-base font-medium text-green-700">Special price</h1>

                        {/* Products price discount */}
                        <div class="flex items-baseline">
                            <p class="mt-2 text-2xl font-semibold">₹50</p>
                            <del class="ml-2 text-xl font-medium text-gray-500">{PageInfo.product?.price}</del>
                            <span class="ml-4 font-semibold text-green-600">{PageInfo.product?.discountPercentage} off</span>
                        </div>
                        {/* Products ratings */}
                        <div class="Stars flex w-16 justify-evenly mt-7 rounded-3xl items-center bg-green-400">
                            <span class="text-xl">{Math.floor(PageInfo.product?.rating)} </span><img class="w-5 ml-2 h-5" src="https://img.icons8.com/ios/50/000000/star--v1.png" alt="star--v1" />
                        </div>

                        {/* All products images */}
                        <div class="mt-9 flex flex-wrap md:gap-3 gap-1">
                            {
                                PageInfo.product?.images.map((img) => {
                                    return (
                                        <div class="md:h-32 w-24 md:w-32 h-24 border bg-slate-600">
                                            <img className="w-full h-full" src={img} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Products container Ends here */}


                <div className="RelatedProducts mt-7 md:w-11/12 m-auto">
                    <h1 className="font-semibold text-2xl text-gray-700">Related Products</h1>


                    <div className="w-full grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2">
                        {
                            PageInfo.relatedArray?.map((ele) => {
                                return (
                                    <ProductCard Price={ele.price} ProductName={ele.title} ProductSrc={ele.thumbnail} discount={ele.discountPercentage} ProductClick={()=>
                                    {
                                        Navigate(`/productInfo/${ele._id}`)
                                    }}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {
                ProductInfoLoading && <Loader />
            }
        </>

    )
}
export default ProductInfo