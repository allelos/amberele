import { baseUnit } from "./constants"

const getPadding = ({ padding }) => {
  if (!padding) {
    return ""
  }

  if (!Array.isArray(padding) && !isNaN(padding)) {
    return `padding: ${padding * baseUnit}px;`
  }

  if (Array.isArray(padding) && padding.length >= 1 && padding.length <= 4) {
    return `padding: ${padding.map(size => `${size * baseUnit}px` || "auto").join(" ")};`
  }

  console.error("Please provide an array (max 4 elements) for `padding` style helper.")
}

export default getPadding
