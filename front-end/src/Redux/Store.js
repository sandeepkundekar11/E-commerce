import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import { ProductReducer } from "./Reducers"

const rootstore=combineReducers({
    products:ProductReducer
})

export const store =createStore(rootstore,applyMiddleware(thunk))
