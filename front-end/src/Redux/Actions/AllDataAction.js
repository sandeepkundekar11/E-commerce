export const ALLDATA = "alldata";
export const ALLDATA_LOADING = "alldataloading";
export const ALLDATA_ERR = "alldataErr";

export const GetAlldata = (data) => {
  return {
    type: ALLDATA,
    payload: data,
  };
};
export const AllDataLoading = () => {
  return {
    type: ALLDATA_LOADING,
  };
};
export const AlldataErr = (data) => {
  return {
    type: ALLDATA_ERR,
    payload: data,
  };
};

export const GetALLApidata = (id) => {
  return async (dispatch) => {
    try {
      dispatch(AllDataLoading());
      let responce = await fetch(
        `http://192.168.21.164:8000/ecommerce/userInfo/${id}`
      );
      let data = await responce.json();
      if (data) {
        dispatch(GetAlldata(data));
      }
    } catch (error) {
      dispatch(AlldataErr(error));
    }
  };
};
