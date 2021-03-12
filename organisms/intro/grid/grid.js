import styled from "@emotion/styled"
import Flex from "@components/flex"

const Grid = styled(Flex)`
  display: grid;
  grid-template-columns: 1fr repeat(6, minmax(80px, 140px)) 1fr;
  grid-template-rows: 80px 1fr auto 120px 120px;
  gap: 40px;
  background-color: rgb(230 225 216);
  background: linear-gradient(115deg, rgb(229 221 212) 0%, rgb(230 225 216) 100%);

  @media (max-width: 1024px) {
    display: block;
  }
`

export default Grid
