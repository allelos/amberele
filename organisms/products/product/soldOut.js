import Flex from "@components/flex"
import { Small } from "@components/typography"

const SoldOut = () => (
  <Flex position="absolute" zIndex={1} width="100%" justifyContent="end">
    <Flex background="#0c242a" padding={[1]} >
      <Small textTransform="uppercase" small color="white">
        Sold out
      </Small>
    </Flex>
  </Flex>
)

export default SoldOut