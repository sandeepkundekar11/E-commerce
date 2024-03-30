import { LocalHost } from "../../constants";

export const DELETE = "delete";
export const DELETE_LOADING = "deleteloading";
export const DELETE_ERROR = "delete_err";
const DeleteCard = (data) => {
  return {
    type: DELETE,
    payload: data,
  };
};

const DeleteCardLoading = () => {
  return {
    type: DELETE_LOADING,
  };
};

const DeleteCard_Err = (err) => {
  return {
    type: DELETE_ERROR,
    payload: err,
  };
};

// delete the address
export const DeleletAddress = (userId, addressId) => {
  return async (dispatch) => {
    try {
      dispatch(DeleteCardLoading());
      let responce = await fetch(
        `http://${LocalHost}:8000/ecommerce/deleteAddress?id=${userId}&&addressId=${addressId}`,
        {
          method: "PUT",
        }
      );
      let data = await responce.json();
      if (data) {
        dispatch(DeleteCard(data));
      }
    } catch (error) {
      dispatch(DeleteCard_Err(error));
    }
  };
};

// delete the products

export const DeleletProduct = (userId, addressId) => {
  return async (dispatch) => {
    try {
      dispatch(DeleteCardLoading());
      let responce = await fetch(
        ` http://${LocalHost}:8000/ecommerce/deleteCard?id=${userId}&&productId=${addressId} `,
        {
          method: "PUT",
        }
      );
      let data = await responce.json();
      if (data) {
        dispatch(DeleteCard(data));
      }
    } catch (error) {
      dispatch(DeleteCard_Err(error));
    }
  };
};
