import { css } from "@emotion/react"
import { Huge } from "@components/typography"

const responsiveHuge = css`
  @media (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
  }
`

const Title = ({ children }) => (
  <Huge serif css={responsiveHuge}>
    {children}
  </Huge>
)

export default Title
