import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import Flex from "@components/flex"

const bounce = keyframes`
  75% {
    transform: scale(0.9);
  }
`

const animation = ({ visible }) =>
  visible &&
  css`
    animation: ${bounce} 330ms linear 1;
  `

const Container = styled(Flex)`
  border-radius: 4px;
  top: 40%;
  left: 40%;
  transition: opacity 0.2s linear;
  ${animation};

  @media (max-width: 1024px) {
    left: 40%;
  }

  @media (max-width: 475px) {
    left: 30%;
    top: 30%;
  }

  @media (max-width: 375px) {
    left: 25%;
    top: 30%;
  }
`
export default Container