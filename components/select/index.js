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

const Select = ({ label, name, onChange, children, ...rest }) => {
  return (
    <Flex as="label" column gap={1} {...rest}>
      <Text small>{label}</Text>
      <Flex position="relative" alignItems="center">
        <Flex as="select" name={name} flex padding={[2]} onChange={onChange} css={wrapper}>
          {children}
        </Flex>
        <Icon name="chevron" small />
      </Flex>
    </Flex>
  )
}

export default Select
