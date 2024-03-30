import { LocalHost } from "../../constants";

export const PRODUCT_COUNT = "productcount";
export const PRODUCT_COUNT_LOADING = "productcountloading";
export const PRODUCT_COUNT_ERROR = "productcount_err";

const GetproductCount = (data) => {
  return {
    type: PRODUCT_COUNT,
    payload: data,
  };
};

const GetProductCountLoading = () => {
  return {
    type: PRODUCT_COUNT_LOADING,
  };
};

const GetProductCountErr = (err) => {
  return {
    type: PRODUCT_COUNT_ERROR,
    payload: err,
  };
};

// Increamenting the product Count

export const IncreamentProductCount = (userId, ProductId) => {
  return async (dispatch) => {
    try {
      dispatch(GetProductCountLoading());
      let responce = await fetch(
        `http://${LocalHost}:8000/ecommerce/count?id=${userId}&&productId=${ProductId}`,
        {
          method: "PUT",
        }
      );
      let data = await responce.json();
      if (data) {
        dispatch(GetproductCount(data));
      }
    } catch (error) {
      dispatch(GetProductCountErr(error));
    }
  };
};

// Decrenent Product count

export const DecrementProductCount = (userId, ProductId) => {
  return async (dispatch) => {
    try {
      dispatch(GetProductCountLoading());
      let responce = await fetch(
        `http://${LocalHost}:8000/ecommerce/Decount?id=${userId}&&productId=${ProductId}`,
        {
          method: "PUT",
        }
      );
      let data = await responce.json();
      if (data) {
        dispatch(GetproductCount(data));
      }
    } catch (error) {
      dispatch(GetProductCountErr(error));
    }
  };
};
