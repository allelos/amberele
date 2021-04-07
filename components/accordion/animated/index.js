import styled from "@emotion/styled"
import Flex from "@components/flex"

const Animated = styled(Flex)`
  max-height: ${({ maxHeight }) => maxHeight};
  overflow: hidden;
  transition: max-height 300ms ease-in-out;
`

export default Animated
