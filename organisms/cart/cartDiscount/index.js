import { useState, useCallback } from "react"
import Flex from "@components/flex"
import Input from "@components/input"
import Button from "@components/buttons"
import Icon from "@components/icon"

const CartDiscount = ({ addDiscount, discountCode }) => {
  const [code, setCode] = useState(() => discountCode)
  const onClick = useCallback(
    e => {
      e.preventDefault()
      addDiscount(code)
    },
    [code]
  )
  const onChange = useCallback(e => setCode(e.target.value), [])
  return (
    <Flex gap={2} as="form" onSubmit={onClick}>
      <Flex flex>
        <Input placeholder="Έκπτωση..." onChange={onChange} value={code} />
      </Flex>
      <Button width="auto" padding={[2]} type="submit">
        <Icon name="chevron" color="white" small rotate="left" />
      </Button>
    </Flex>
  )
}

export default CartDiscount
