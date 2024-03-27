import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"

import { Add_AddressReducer } from "./Reducers/AddressReducer"
import { UserDataReducer } from "./Reducers/AlldataReducer"
import { EditUseReducer } from "./Reducers/EditUserInfoReducer"
import { joinUserReducer } from "./Reducers/JoinUserReducer"
import { ProductInfoReducer } from "./Reducers/ProductInfoReducer"
import { GetProductsReducer, ProductReducer } from "./Reducers/Reducers"

const rootstore=combineReducers({
    AllData:UserDataReducer,
    products:ProductReducer, // creating the filtering 
    joinUser:joinUserReducer,
    Products:GetProductsReducer,
    ProductInfo:ProductInfoReducer,
    UserAddress:Add_AddressReducer,
    EditUser:EditUseReducer
})

export const store =createStore(rootstore,applyMiddleware(thunk))
