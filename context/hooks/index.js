import { useContext } from "react"
import { CheckoutAPI, Checkout, CheckoutQuantity } from "@context/index"

const useCheckout = () => useContext(Checkout)
const useCheckoutAPI = () => useContext(CheckoutAPI)
const useCheckoutQuantity = () => useContext(CheckoutQuantity)

export { useCheckoutAPI, useCheckout, useCheckoutQuantity }
