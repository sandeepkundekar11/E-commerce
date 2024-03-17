export const CATEGORY_FILTER="category_filter"
export const BRAND_FILTER="brand_filter"
export const GETALL_PRODUCTS="getall_products"
export const PRICE_FILTER="price_filter"

export const SetCategory=(ele)=>
{
    return{
        type:CATEGORY_FILTER,
        payload:ele
    }
}
export const SetBrand=(ele)=>
{
    return{
        type:BRAND_FILTER,
        payload:ele
    }
}
export const GetAllProducts=()=>
{
    return{
        type:GETALL_PRODUCTS
    }
}

export const SelectPrice=(obj)=>{
    return{
        type:PRICE_FILTER,
        payload:obj
    }
}