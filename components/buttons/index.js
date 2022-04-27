import styled from "@emotion/styled"
import width from "@components/mixins/width"
import margin from "@components/mixins/margin"
import padding from "@components/mixins/padding"
import opacity from "@components/mixins/opacity"

const colorsMap = {
  dark: "#0c242a",
  white: "#fff"
}

const getBackground = ({ background = "dark" }) => `background-color: ${colorsMap[background]};`
const getColor = ({ color = "white" }) => `color: ${colorsMap[color]};`
const getBorder = ({ borderColor = "dark" }) => `border: 1px solid ${colorsMap[borderColor]};`

const getPadding = ({ small, padding: p }) =>
  small ? padding({ padding: [4] }) : p ? padding({ padding: p }) : padding({ padding: [5] })
const getWidth = ({ width: w = "240px" }) => width({ width: w })

const Button = styled.button`
  ${getWidth}
  ${getBackground}
  ${getBorder}
  ${getColor}
  ${getPadding}
  ${margin}
  ${opacity}

  font-size: 12px;
  text-align: center;
  letter-spacing: 0.2em;
  transition: all 0.17s ease-in-out;
  cursor: pointer;
  outline: 0;

  :hover,
  :active {
    ${getBackground({ background: "dark" })}
    ${getColor({ color: "white" })}
  }
`

export default Button
