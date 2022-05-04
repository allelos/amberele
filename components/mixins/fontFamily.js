const fontFamilyMap = {
  serif: "Georgia, serif",
  sansSerif: "Inter, Arial, sans-serif"
}

const fontFamily = ({ serif = false }) =>
  `font-family: ${fontFamilyMap[serif ? "serif" : "sansSerif"]};`

export default fontFamily
