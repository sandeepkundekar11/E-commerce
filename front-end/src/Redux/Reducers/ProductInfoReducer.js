import { INFO_PRODUCT, INFO_PRODUCT_ERROR, REQUEST_INFOPRODUCT } from "../Actions/ProductInfoAction"

const InitialProductInfo={
    ProductInfo:null,
    ProductInfoLoading:false,
    ProductInfoError:null
}

export const ProductInfoReducer=(state=InitialProductInfo,action)=>
{
    switch(action.type)
    {
        case INFO_PRODUCT:
            return{
                ProductInfo:action.payload,
                ProductInfoLoading:false,
                ProductInfoError:null
            }
        case REQUEST_INFOPRODUCT:
            return{
                ...state,
                ProductInfoLoading:true,
                ProductInfoError:null
            }
        case INFO_PRODUCT_ERROR:
            return{
                ...state,
                ProductInfoLoading:false,
                ProductInfoError:action.payload
            }
        default :
        return state
    }
}