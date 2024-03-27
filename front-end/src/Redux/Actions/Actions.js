export const CATEGORY_FILTER = "category_filter";
export const BRAND_FILTER = "brand_filter";
export const GETALL_PRODUCTS = "getall_products";
export const PRICE_FILTER = "price_filter";
export const CLEAR_FILTER = "clear_filter";
export const CLEAR_ALL_FILTER = "clear_all_filter";

//
export const PRODUCTS_REQUEST = "product_request";
export const PRODUCTS = "products";
export const PRODUCTS_ERROR = "producterror";
export const SetCategory = (ele) => {
  return {
    type: CATEGORY_FILTER,
    payload: ele,
  };
};
export const SetBrand = (ele) => {
  return {
    type: BRAND_FILTER,
    payload: ele,
  };
};
export const GetAllProducts = (data) => {
  return {
    type: GETALL_PRODUCTS,
    payload: data,
  };
};

export const SelectPrice = (obj) => {
  return {
    type: PRICE_FILTER,
    payload: obj,
  };
};

export const ClearFilter = (ele) => {
  return {
    type: CLEAR_FILTER,
    payload: ele,
  };
};
export const ClearAllFilter = () => {
  return {
    type: CLEAR_ALL_FILTER,
  };
};

export const ProductsLoad = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};

export const GetProducts = (data) => {
  return {
    type: PRODUCTS,
    payload: data,
  };
};
export const ProductError = (data) => {
  return {
    type: ProductError,
    payload: data,
  };
};

// calling the get products api

export const GetApiProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(ProductsLoad());
      let response = await fetch(
        "http://192.168.21.164:8000/ecommerce/allproducts"
      );
      let products = await response.json();
      if (products) {
        dispatch(GetProducts(products));
      }
    } catch (error) {
      dispatch(ProductError(error));
    }
  };
};
