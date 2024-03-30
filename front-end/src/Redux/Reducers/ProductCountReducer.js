import {
  PRODUCT_COUNT,
  PRODUCT_COUNT_ERROR,
  PRODUCT_COUNT_LOADING,
} from "../Actions/ProductCountActions";

const InitialCount = {
  ProductDataCount: null,
  ProductDataLoading: false,
  ProductDataErr: null,
};

export const ProductCountReducer = (state = InitialCount, action) => {
  switch (action.type) {
    case PRODUCT_COUNT:
      return {
        ...state,
        ProductDataCount: action.payload,
        ProductDataLoading: false,
        ProductDataErr: null,
      };
    case PRODUCT_COUNT_LOADING:
      return {
        ...state,
        ProductDataLoading: true,
        ProductDataErr: null,
      };
    case PRODUCT_COUNT_ERROR:
      return {
        ...state,
        ProductDataLoading: false,
        ProductDataErr: action.payload,
      };

    default:
      return state;
  }
};
