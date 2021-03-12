import Link from "next/link"
import Flex from "@components/flex"
import { Text } from "@components/typography"
import Button from "@components/buttons"
import Illustration from "./illustration"

const CartEmpty = () => {
  return (
    <Flex justifyContent="center" alignSelf="center" alignItems="center" flex column gap={8}>
      <Flex width="33%">
        <Illustration />
      </Flex>
      <Flex column gap={2} alignItems="center">
        <Text strong serif>
          Το καλάθι σου είναι άδειο!
        </Text>
        <Link href="/products" passHref>
          <Button as="a">ΞΕΚΙΝΑ ΤΙΣ ΑΓΟΡΕΣ ΣΟΥ</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default CartEmpty
