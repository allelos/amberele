import { css } from "@emotion/react"
import Flex from "@components/flex"
import { Text } from "@components/typography"
import Icon from "./icon"

const wrapper = css`
  appearance: none;
  border-radius: 0;
  cursor: pointer;
  outline: 0;
`

const Select = ({ label, options = [], onChange, children, ...rest }) => {
  return (
    <Flex column gap={2} {...rest}>
      <Text as="label" small>
        {label}
      </Text>
      <Flex position="relative" alignItems="center">
        <Flex as="select" flex padding={[2]} onChange={onChange} css={wrapper}>
          {children}
        </Flex>
        <Icon name="chevron" small />
      </Flex>
    </Flex>
  )
}

export default Select
