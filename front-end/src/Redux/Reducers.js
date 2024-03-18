import data from "../app.json";
import {
  BRAND_FILTER,
  CATEGORY_FILTER,
  CLEAR_ALL_FILTER,
  CLEAR_FILTER,
  GETALL_PRODUCTS,
  PRICE_FILTER,
} from "./Actions";
const InitilaProducts = {
  AllProducts: data,
  CategoryFilter: [],
  BrandFilter: [],
  PriceFilter: [],
};

export const ProductReducer = (state = InitilaProducts, action) => {
  switch (action.type) {
    case GETALL_PRODUCTS:
      return {
        ...state,
        AllProducts: data.filter((ele) => {
          let category =
            state.CategoryFilter.length === 0 ||
            state.CategoryFilter.includes(ele.category);
          let brand =
            state.BrandFilter.length === 0 ||
            state.BrandFilter.includes(ele.brand);
          let price =
            state.PriceFilter.length === 0 ||
            state.PriceFilter.some((price) => {
              return ele?.price >= price.start && ele?.price <= price.end;
            });
          return category && brand && price;
        }),
      };

    case CATEGORY_FILTER:
      return {
        ...state,
        CategoryFilter: state.CategoryFilter?.includes(action.payload)
          ? state.CategoryFilter?.filter((ele) => {
              return ele !== action.payload;
            })
          : [...state.CategoryFilter, action.payload],
      };
    case BRAND_FILTER:
      return {
        ...state,
        BrandFilter: state.BrandFilter?.includes(action.payload)
          ? state.BrandFilter.filter((ele) => {
              return ele !== action.payload;
            })
          : [...state.BrandFilter, action.payload],
      };
    case PRICE_FILTER:
      return {
        ...state,
        PriceFilter: state.PriceFilter?.includes(action.payload)
          ? state.PriceFilter.filter((ele) => {
              return ele !== action.payload;
            })
          : [...state.PriceFilter, action.payload],
      };
    case CLEAR_FILTER:
      return {
        ...state,
        CategoryFilter: state.CategoryFilter.filter((ele) => {
          return ele !== action?.payload;
        }),
        BrandFilter: state.BrandFilter.filter((ele) => {
          return ele !== action?.payload;
        }),
        PriceFilter: state.PriceFilter.filter((ele) => {
          return ele !== action?.payload;
        }),
      };
    case CLEAR_ALL_FILTER:
      return {
        ...state,
        CategoryFilter: [],
        BrandFilter: [],
        PriceFilter: [],
      };
    default:
      return state;
  }
};
