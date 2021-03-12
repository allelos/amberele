import styled from "@emotion/styled"
import Flex from "@components/flex"

const commonStyles = `
  font-weight: normal;
  margin: 0;
`

const Title = styled.h1`
  ${commonStyles}
  font-size: 40px;
  font-family: "Georgia", serif;
  letter-spacing: -0.05em;
`

const Subtitle = styled.h2`
  ${commonStyles}
  font-size: 18px;
`

const ComparePrice = styled(Subtitle)`
  text-decoration: line-through rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.6);
`

const Header = ({ title, price, compareAtPrice }) => (
  <Flex column gap={4}>
    <Title>{title}</Title>
    <Flex gap={2} alignItems="center">
      {compareAtPrice && <ComparePrice>{compareAtPrice} &euro;</ComparePrice>}
      <Subtitle>{price} &euro;</Subtitle>
    </Flex>
  </Flex>
)

export default Header
