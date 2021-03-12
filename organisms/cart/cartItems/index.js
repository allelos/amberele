import { useMemo } from "react"
import Flex from "@components/flex"
import CartItem from "@organisms/cart/cartItem"

const CartItems = ({ items, remove, update }) => {
  const lineItems = useMemo(() => items, [items])

  return (
    <Flex column gap={4} flex padding={[6, 0]}>
      {lineItems.map(item => (
        <CartItem key={item.title} {...item} remove={remove} update={update} />
      ))}
    </Flex>
  )
}

export default CartItems
