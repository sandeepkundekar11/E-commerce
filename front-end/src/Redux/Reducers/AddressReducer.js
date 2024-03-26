import { ADDRESS, ADDRESS_ERR, LOAD_ADDRESS } from "../Actions/AddressActions"

const AddressInitialData = {
    addressData: null,
    addressLoading: false,
    addressErr: null
}

export const Add_AddressReducer = (state = AddressInitialData, action) => {
    switch (action.type) {
        case ADDRESS:
            return {
                addressData: action.payload,
                addressLoading: false,
                addressErr: null
            }
        case LOAD_ADDRESS:
            return {
                ...state,
                addressLoading: true,
                addressErr: null
            }
        case ADDRESS_ERR:
            return {
                ...state,
                addressLoading: false,
                addressErr: action.payload
            }


        default:
            return state
    }

}