import { css } from "@emotion/react"

const breakpointMap = {
  xs: `@media (max-width: 375px)`,
  sm: `@media (max-width: 512px)`,
  md: `@media (max-width: 768px)`,
  lg: `@media (max-width: 992px)`,
  xl: `@media (max-width: 1200px)`
}

const responsive = props => {
  const breakpoints = Object.keys(breakpointMap).filter(key => key in props)
  if (!breakpoints.length) return ""

  return breakpoints.map(
    bp => css`
      ${breakpointMap[bp]} {
        ${props[bp]};
      }
    `
  )
}

export default responsive
