import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";

import { Add_AddressReducer } from "./Reducers/AddressReducer";
import { UserDataReducer } from "./Reducers/AlldataReducer";
import { DeleteReducer } from "./Reducers/DeleteReducer";
import { EditUseReducer } from "./Reducers/EditUserInfoReducer";
import { joinUserReducer } from "./Reducers/JoinUserReducer";
import { PaymentReducer } from "./Reducers/PaymentReducer";
import { ProductCountReducer } from "./Reducers/ProductCountReducer";
import { ProductInfoReducer } from "./Reducers/ProductInfoReducer";
import { ProductCardReducer } from "./Reducers/ProductReducer";
import { GetProductsReducer, ProductReducer } from "./Reducers/Reducers";

const rootstore = combineReducers({
  AllData: UserDataReducer,
  products: ProductReducer, // creating the filtering
  joinUser: joinUserReducer,
  Products: GetProductsReducer,
  ProductInfo: ProductInfoReducer,
  UserAddress: Add_AddressReducer,
  EditUser: EditUseReducer,
  CardProduct: ProductCardReducer,
  CardCount: ProductCountReducer,
  DeleteCard: DeleteReducer,
  paymentData:PaymentReducer
});

export const store = createStore(rootstore, applyMiddleware(thunk));
