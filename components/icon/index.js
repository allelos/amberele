import styled from "@emotion/styled"
import padding from "@components/mixins/padding"
import margin from "@components/mixins/margin"
import * as icons from "./icons"

const getPadding = ({ padding: p }) => padding({ padding: p })
const getMargin = ({ margin: m }) => margin({ margin: m })
const getSize = ({ small }) => {
  const size = small ? "14px" : "24px"
  return `
    width: ${size};
    height: ${size};
  `
}

const rotateMap = {
  right: "90deg",
  left: "-90deg",
  reverse: "180deg"
}

const getRotation = ({ rotate }) => {
  if (!rotate) return
  if (!rotateMap[rotate]) return
  return `transform: rotate(${rotateMap[rotate]});`
}

const StyledIcon = styled.span`
  display: block;
  ${getPadding}
  ${getMargin}
  ${getRotation}
  ${getSize}

  cursor: pointer;

  > svg {
    fill: transparent;
    stroke: ${({ color = "black" }) => color};
  }
`

const Icon = ({ name, color, rotate, ...rest }) => {
  if (!icons[name]) {
    console.log("Icon not found")
    return null
  }

  return (
    <StyledIcon color={color} rotate={rotate} {...rest}>
      {icons[name]()}
    </StyledIcon>
  )
}

export default Icon
