const letterSpacing = ({ letterSpacing, small }) => {
  if (letterSpacing) return `letter-spacing: ${letterSpacing};`
  if (small) return `letter-spacing: -0.025em;`
  return `letter-spacing: -0.05em;`
}

export default letterSpacing
