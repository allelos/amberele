import { useContext, useMemo } from "react"
import { Context } from "@context/index"
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
  const { checkout, removeItem, updateItem, loading, addDiscount, removeDiscount } = useContext(
    Context
  )
  const {
    lineItems = [],
    webUrl = "",
    lineItemsSubtotalPrice: { amount: subtotalPrice = "" } = {},
    totalPrice,
    discountApplications = []
  } = useMemo(() => checkout, [checkout])

  const isEmpty = useMemo(() => !Boolean(lineItems.length), [lineItems])
  const [{ code } = {}] = discountApplications

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
                  code={code}
                  removeDiscount={removeDiscount}
                />
                {!code && <CartDiscount addDiscount={addDiscount} discountCode={code} />}
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
