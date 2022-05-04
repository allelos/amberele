import { useMemo } from "react"
import { useCheckout, useCheckoutAPI } from "@context/hooks"
import Sidebar from "@components/sidebar"
import Flex from "@components/flex"
import { Tertiary } from "@components/typography"
import Icon from "@components/icon"
import Button from "@components/buttons"
import CartItems from "./cartItems"
import CartDetails from "./cartDetails"
import CartEmpty from "./cartEmpty"
import CartDiscount from "./cartDiscount"

const Cart = ({ open, onToggle }) => {
  const { removeItem, updateItem, addDiscount, removeDiscount } = useCheckoutAPI()
  const { checkout, loading } = useCheckout()
  const {
    lineItems = [],
    webUrl = "",
    lineItemsSubtotalPrice: { amount: subtotalPrice = "" } = {},
    totalPrice,
    discountApplications = []
  } = useMemo(() => checkout, [checkout])

  const isEmpty = useMemo(() => !Boolean(lineItems.length), [lineItems])
  const [{ code, title: automaticCode } = {}] = discountApplications

  return (
    <Sidebar open={open} onToggle={onToggle}>
      {({ hide }) => (
        <Flex column flex opacity={loading ? 0.25 : 1}>
          <Icon name="close" role="button" aria-label="button" onClick={hide} />
          <Tertiary textAlign="center">Το καλάθι σου</Tertiary>
          {isEmpty && <CartEmpty />}
          {!isEmpty && (
            <>
              <CartItems items={lineItems} remove={removeItem} update={updateItem} />
              <Flex column gap={4}>
                <CartDetails
                  subtotalPrice={subtotalPrice}
                  totalPrice={totalPrice}
                  code={code || automaticCode}
                  removeDiscount={removeDiscount}
                />
                {!code && !automaticCode && (
                  <CartDiscount addDiscount={addDiscount} discountCode={code || automaticCode} />
                )}
                <Button as="a" href={webUrl} width="100%">
                  ΟΛΟΚΛΗΡΩΣΕ ΤΗΝ ΠΑΡΑΓΓΕΛΙΑ ΣΟΥ
                </Button>
              </Flex>
            </>
          )}
        </Flex>
      )}
    </Sidebar>
  )
}

export default Cart
