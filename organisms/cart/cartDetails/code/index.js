import { useCallback } from "react"
import Flex from "@components/flex"
import { Text, Small } from "@components/typography"
import Icon from "@components/icon"

const Code = ({ code, removeDiscount, totalPrice, subtotalPrice }) => {
  const onClick = useCallback(() => {
    removeDiscount()
  }, [])

  return (
    <Flex justifyContent="between">
      <Flex alignItems="center" gap={1}>
        <Small small underline>
          {code}
        </Small>
        <Icon name="coupon" small />
        <Icon name="close" small aria-label="button" role="button" onClick={onClick} />
      </Flex>
      <Text small>{totalPrice - subtotalPrice} &euro;</Text>
    </Flex>
  )
}

export default Code
