export const LOAD_ADDRESS = "loadaddress";
export const ADDRESS = "address";
export const ADDRESS_ERR = "addressError";

export const GetAddress = (data) => {
  return {
    type: ADDRESS,
    payload: data,
  };
};
export const LoadAddress = () => {
  return {
    type: LOAD_ADDRESS,
  };
};
export const AddressErr = (err) => {
  return {
    type: AddressErr,
    payload: err,
  };
};

// adding the address
export const GetApiAddress = (UserId, address) => {
  return async (dispatch) => {
    try {
      dispatch(LoadAddress());
      let responce = await fetch(
        `http://192.168.21.164:8000/ecommerce/addAddress/${UserId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(address),
        }
      );

      let data = await responce.json();
      if (data) {
        dispatch(GetAddress(data));
      }
    } catch (error) {
      dispatch(AddressErr(error));
    }
  };
};
