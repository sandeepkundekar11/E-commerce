import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"

import { joinUserReducer } from "./Reducers/JoinUserReducer"
import { ProductInfoReducer } from "./Reducers/ProductInfoReducer"
import { GetProductsReducer, ProductReducer } from "./Reducers/Reducers"

const rootstore=combineReducers({
    products:ProductReducer,
    joinUser:joinUserReducer,
    Products:GetProductsReducer,
    ProductInfo:ProductInfoReducer
})

export const store =createStore(rootstore,applyMiddleware(thunk))
