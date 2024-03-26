import { ALLDATA, ALLDATA_ERR, ALLDATA_LOADING } from "../Actions/AllDataAction";

const userDataInitialData={
    userData:null,
    userDataLoading:false,
    userDataErr:null
}

export const UserDataReducer=(state=userDataInitialData,action)=>
{
    switch (action.type) {
        case ALLDATA:
            return{
                userData:action.payload,
                userDataLoading:false,
                userDataErr:null
            }
        case ALLDATA_LOADING:
            return{
                ...state,
                userDataLoading:true,
                userDataErr:null
            }
        case ALLDATA_ERR:
            return{
                ...state,
                userDataLoading:false,
                userDataErr:action.payload
            }
    
        default:
            return state
    }
}