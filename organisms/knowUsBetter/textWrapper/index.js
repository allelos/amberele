import Flex from "@components/flex"

const TextWrapper = ({ children, ...rest }) => (
  <Flex width={{ max: "480px" }} justifyContent="center" column gap={4} padding={[4]} {...rest}>
    {children}
  </Flex>
)

export default TextWrapper
