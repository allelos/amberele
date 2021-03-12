import { css } from "@emotion/react"
import Flex from "@components/flex"

const centerMixin = css`
  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const Section = ({ children, ...rest }) => (
  <Flex as="section" justifyContent="between" css={centerMixin} {...rest}>
    {children}
  </Flex>
)

export default Section
