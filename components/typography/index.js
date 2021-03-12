import { css } from "@emotion/react"
import styled from "@emotion/styled"
import margin from "@components/mixins/margin"
import padding from "@components/mixins/padding"
import textColor from "@components/mixins/textColor"
import textAlign from "@components/mixins/textAlign"
import textTransform from "@components/mixins/textTransform"
import textDecoration from "@components/mixins/textDecoration"
import fontFamily from "@components/mixins/fontFamily"
import fontWeight from "@components/mixins/fontWeight"
import letterSpacing from "@components/mixins/letterSpacing"

const getMargin = ({ margin: m = [0] }) => margin({ margin: m })
const getPadding = ({ padding: p = [0] }) => padding({ padding: p })
const getCss = ({ css }) => css && css

const getTypography = props => css`
  ${getMargin(props)}
  ${getPadding(props)}
  ${fontFamily(props)}
  ${fontWeight(props)}
  ${textColor(props)}
  ${textAlign(props)}
  ${textTransform(props)}
  ${textDecoration(props)}
  ${letterSpacing(props)}
  ${getCss(props)}
`

export const Huge = styled.h1`
  ${getTypography}
  font-size: 80px;
`

export const Title = styled.h1`
  ${getTypography};
  font-size: 40px;
`

export const Subtitle = styled.h2`
  ${getTypography}
  font-size: 32px;
`

export const Tertiary = styled.h3`
  ${getTypography}
  font-size: 23px;
  line-height: 1.6;
`

export const Text = styled.p`
  ${getTypography}
  font-size: ${({ small }) => (small ? "14px" : "16px")};
  line-height: 1.6;
`

export const Small = styled.small`
  ${getTypography}
  font-size: ${({ small }) => (small ? "12px" : "13px")};
`
