import styled from "@emotion/styled"
import { useContext, useMemo } from "react"
import { Context } from "@context/index"
import Flex from "@components/flex"
import Icon from "@components/icon"

const Pill = styled(Flex)`
  top: -2px;
  left: -4px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  color: white;
  font-size: 11px;
`

const CartIcon = ({ onToggle }) => {
  const { checkout } = useContext(Context)
  const quantity = useMemo(
    () => (checkout.lineItems || []).reduce((acc, item) => acc + item.quantity, 0),
    [checkout]
  )

  return (
    <Flex position="relative" onClick={onToggle} role="button" aria-label="button">
      <Icon name="cart" />
      {!!quantity && (
        <Pill
          position="absolute"
          background="#0d4a68"
          alignItems="center"
          justifyContent="center"
          elevation={1}
        >
          {quantity}
        </Pill>
      )}
    </Flex>
  )
}

export default CartIcon
