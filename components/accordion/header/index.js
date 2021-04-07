import Flex from "@components/flex"
import Icon from "@components/icon"

const Header = ({ children, isOpen }) => (
  <Flex justifyContent="between" alignItems="center" gap={4}>
    {children}
    <Flex>
      <Icon name="chevron" rotate={!isOpen && "left"} small role="button" aria-label="button" />
    </Flex>
  </Flex>
)

export default Header
