import styled from "@emotion/styled"
import { useCheckoutQuantity } from "@context/hooks"
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
  const quantity = useCheckoutQuantity()

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
