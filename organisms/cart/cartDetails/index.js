import Flex from "@components/flex"
import { Text } from "@components/typography"
import Code from "./code"

const CartDetails = ({ subtotalPrice, totalPrice, code, removeDiscount }) => {
  return (
    <Flex column gap={1}>
      <Flex justifyContent="between">
        <Text small>Υποσύνολο</Text>
        <Text small>{subtotalPrice} &euro;</Text>
      </Flex>
      {code && (
        <Code
          code={code}
          removeDiscount={removeDiscount}
          totalPrice={totalPrice}
          subtotalPrice={subtotalPrice}
        />
      )}
      <Flex justifyContent="between">
        <Text small>ΦΠΑ</Text>
        <Text small>0.00 &euro;</Text>
      </Flex>
      <Flex justifyContent="between">
        <Text small>Έξοδα αποστολής</Text>
        <Text small>--</Text>
      </Flex>
      <Flex height="1px" background="#00000022" width="100%" margin={[2, 0]} />
      <Flex justifyContent="between">
        <Text small strong>
          Σύνολο
        </Text>
        <Text small strong>
          {totalPrice} &euro;
        </Text>
      </Flex>
    </Flex>
  )
}

export default CartDetails
