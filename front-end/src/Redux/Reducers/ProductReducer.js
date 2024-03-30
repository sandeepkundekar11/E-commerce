import {
  ADDTOCARD,
  ADDTO_CARD_ERROR,
  ADDTO_CARD_LOADING,
} from "../Actions/ProductAction";

const ProductInitialData = {
  ProductCardData: null,
  ProductCardLoading: false,
  ProductCardErr: null,
};

export const ProductCardReducer = (state = ProductInitialData, action) => {
  switch (action.type) {
    case ADDTOCARD:
      return {
        ProductCardData: action.payload,
        ProductCardLoading: false,
        ProductCardErr: null,
      };
    case ADDTO_CARD_LOADING:
      return {
        ...state,
        ProductCardLoading: true,
        ProductCardErr: null,
      };

    case ADDTO_CARD_ERROR:
      return {
        ...state,
        ProductCardLoading: false,
        ProductCardErr: action.payload,
      };
    default:
      return state;
  }
};
