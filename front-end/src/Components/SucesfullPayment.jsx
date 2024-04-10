import paymentImg from "../Images/payment.png"
const SuccessfulPayment = ({price,onOutsideClick}) => {
    return (
        <div class=" PaymentContainer flex h-screen w-screen items-center justify-center absolute top-0 left-0 right-0 z-50" onClick={onOutsideClick}>
            <div class="h-96 w-96 bg-transparent paymentBox paymentCard bg-white">
                <img class="bg-transparent" src={paymentImg} alt="" />
                <p class="-mt-20 text-center text-3xl font-bold text-green-600">{price}₹</p>
                <h1 class="text-center text-3xl font-semibold">Payment successfull !</h1>
            </div>
        </div>

    )
}
export default SuccessfulPayment