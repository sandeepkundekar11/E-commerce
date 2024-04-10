import { LocalHost } from "../../constants";

export const PAYMENT="payment"
export const PAYMENT_LOADING="paymentloading";
export const PAYMENTERR="paymentErr"
const GetPayment=(data)=>
{
    return{
        type:PAYMENT,
        payload:data
    }
}
const LoadPayment=()=>
{
    return{
        type:PAYMENT_LOADING
    }
}

const PaymentErr=(err)=>
{
    return{
        type:PAYMENTERR,
        payload:err
    }
}

export const ApiPayPayment=(price,email,successfull)=>
{
    return async(dispatch)=>
    {

        try {
            dispatch(LoadPayment())
            let details={
                price:price*100,
                email:email,
                userId:JSON.parse(localStorage.getItem("user"))._id
            }
            let responce=await fetch(`http://${LocalHost}:8000/ecommerce/payment`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(details)
            })

            let data=await responce.json()
            if(data)
            {
                dispatch(GetPayment(data))
                successfull(price)
            }
        } catch (error) {
            dispatch(PaymentErr(error))
        }
    }
}