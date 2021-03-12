import styled from "@emotion/styled"
import backgroundColor from "@components/mixins/backgroundColor"
import position from "@components/mixins/position"
import width from "@components/mixins/width"
import height from "@components/mixins/height"
import margin from "@components/mixins/margin"
import padding from "@components/mixins/padding"
import opacity from "@components/mixins/opacity"
import zIndex from "@components/mixins/zIndex"
import flex from "@components/mixins/flex"
import direction from "@components/mixins/direction"
import justifyContent from "@components/mixins/justifyContent"
import alignItems from "@components/mixins/alignItems"
import alignContent from "@components/mixins/alignContent"
import alignSelf from "@components/mixins/alignSelf"
import gap from "@components/mixins/gap"
import wrap from "@components/mixins/wrap"
import order from "@components/mixins/order"
import responsive from "@components/mixins/responsive"
import elevation from "@components/mixins/elevation"

const Flex = styled.div`
  display: flex;
  box-sizing: border-box;
  ${backgroundColor}
  ${position}
  ${width}
  ${height}
  ${margin}
  ${padding}
  ${opacity}
  ${zIndex}
  ${flex}
  ${direction}
  ${justifyContent}
  ${alignItems}
  ${alignContent}
  ${alignSelf}
  ${gap}
  ${wrap}
  ${order}
  ${responsive}
  ${elevation}
  ${({ css }) => css}
`
export default Flex
