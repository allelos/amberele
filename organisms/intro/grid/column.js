import styled from "@emotion/styled"
import Flex from "@components/flex"

const Column = styled(Flex)`
  display: ${({ main }) => main && "block;"};
  grid-column: ${({ main }) => (main ? "4 / span 6;" : "2 / span 3;")};
  grid-row: ${({ main }) => (main ? "2 / span 2;" : "3 / span 2;")};
  box-sizing: border-box;
`
export default Column
