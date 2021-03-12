import { useContext } from "react"
import { Context } from "@context/index"
import Flex from "@components/flex"
import Button from "@components/buttons"

const BuyButton = ({ id, children }) => {
  const { addItem } = useContext(Context)
  const onClick = () => addItem({ variantId: id, quantity: 1 })
  return (
    <Flex order={2} padding={[2, 3, 2, 0]} sm={{ order: 1 }}>
      <Button width="100%" onClick={onClick}>
        {children}
      </Button>
    </Flex>
  )
}

export default BuyButton
