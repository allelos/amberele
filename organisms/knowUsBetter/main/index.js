import { css } from "@emotion/react"
import Flex from "@components/flex"

const responsiveMain = css`
  @media (max-width: 768px) {
    & > *:not(:last-child) {
      margin-bottom: 24px !important;
    }
  }
`

const Main = ({ children }) => (
  <Flex
    as="main"
    column
    gap={32}
    width={{ width: "100%", max: "1280px" }}
    margin={["auto"]}
    padding={[0, 0, 32]}
    css={responsiveMain}
  >
    {children}
  </Flex>
)

export default Main
