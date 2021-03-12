const colorMap = {
  dark: "#252525",
  darkGray: "#3d3d3d",
  white: "#fff",
  brand: "#0c242a",
  secondary: "#0d4a68"
}

const textColor = ({ color }) => {
  if (!colorMap[color]) return `color: ${colorMap["dark"]};`
  return `color: ${colorMap[color]};`
}

export default textColor
