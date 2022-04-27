import { useContext } from "react"
import { Context } from "@context/index"
import Flex from "@components/flex"
import Button from "@components/buttons"

const BuyButton = ({ item, children }) => {
  const { addItem } = useContext(Context)
  const { id, available, ...rest } = item

  const onClick = () => available && addItem({ variantId: id, quantity: 1, ...rest })

  return (
    <Flex order={2} padding={[2, 3, 2, 0]} sm={{ order: 1 }}>
      <Button width="100%" onClick={onClick} opacity={available ? 1 : 0.5}>
        {children}
      </Button>
    </Flex>
  )
}

export default BuyButton
