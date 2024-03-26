import { JOIN_ERROR, REQUEST_USER, USER_JOIN } from "../Actions/JoinUserAction";

const initialData={
    data:null,
    loading:false,
    error:null
}

export const joinUserReducer=(state=initialData,action)=>
{
    switch (action.type) {
        case USER_JOIN:
            return{
                ...state,
                data:action.payload,
                loading:false,
                error:null
            }
        case  REQUEST_USER:
            return{
                ...state,
                data:null,
                loading:true,
                error:null
            }
        case JOIN_ERROR:
            return{
                ...state,
                data:null,
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}