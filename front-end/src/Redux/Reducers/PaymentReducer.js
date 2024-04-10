import { PAYMENT, PAYMENTERR, PAYMENT_LOADING } from "../Actions/PaymentAction";

const InitialPaymentData = {
    Payment: null,
    paymentLoading: false,
    paymentErr: null
}

export const PaymentReducer = (state = InitialPaymentData, action) => {
    switch (action.type) {
        case PAYMENT:
            return {
                ...state,
                Payment: action.payload,
                paymentLoading: false,
                paymentErr: null
            }
        case PAYMENT_LOADING:
            return{
                ...state,
                paymentLoading: true,
                paymentErr: null
            }
        case PAYMENTERR:
            return{
                ...state,
                paymentLoading: false,
                paymentErr: action.payload
            }

        default:
            return state
    }
}