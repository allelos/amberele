import styled from "@emotion/styled"
import width from "@components/mixins/width"
import margin from "@components/mixins/margin"
import padding from "@components/mixins/padding"

const getWidth = ({ width: w = "100%" }) => width({ width: w })
const getPadding = ({ padding: p = [1, 2] }) => padding({ padding: p })
const getBorder = ({ borderColor = "#00000033" }) => `border: 1px solid ${borderColor};`

const Input = styled.input`
  ${getWidth}
  ${getBorder}
  ${getPadding}
  ${getBorder}
  ${margin}


  border-radius: 2px;
  transition: all 0.17s ease-in-out;
  outline: 0;

  :hover,
  :active {
    ${getBorder({ borderColor: "#000000aa" })}
  }
`

export default Input
