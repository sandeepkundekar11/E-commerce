export const REQUEST_INFOPRODUCT = "requestproduct";
export const INFO_PRODUCT = "infoproduct";
export const INFO_PRODUCT_ERROR = "infoProducterror";

export const GetInfoProduct = (data) => {
  return {
    type: INFO_PRODUCT,
    payload: data,
  };
};

export const GetrequestInfoProduct = () => {
  return {
    type: REQUEST_INFOPRODUCT,
  };
};

export const GetProductInfoErr = (data) => {
  return {
    type: INFO_PRODUCT_ERROR,
    payload: data,
  };
};

export const GetApiProductInfo = (id) => {
  return async (dispatch) => {
    try {
      dispatch(GetrequestInfoProduct());
      let responce = await fetch(
        `http://192.168.0.109:8000/ecommerce/info/${id}`
      );
      let data = await responce.json();
      if (data) {
        dispatch(GetInfoProduct(data));
      }
    } catch (error) {
      dispatch(GetProductInfoErr(error));
    }
  };
};
