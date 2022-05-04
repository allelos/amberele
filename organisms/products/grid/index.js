import styled from "@emotion/styled"
import Flex from "@components/flex"

const Grid = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 4px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 4px;
  }
`

export default Grid
