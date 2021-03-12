const fontFamily = ({ serif = false }) =>
  `font-family: ${serif ? "Georgia" : "Inter"}, ${serif ? "serif" : "sans-serif"};`

export default fontFamily
