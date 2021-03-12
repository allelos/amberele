import { baseUnit } from "./constants"

const margin = ({ margin }) => {
  if (!margin) {
    return ""
  }

  if (!Array.isArray(margin) && !isNaN(margin)) {
    return `margin: ${margin * baseUnit}px;`
  }

  if (Array.isArray(margin) && margin.length >= 1 && margin.length <= 4) {
    return `margin: ${margin
      .map(size => (size === "auto" ? size : `${size * baseUnit}px`))
      .join(" ")};`
  }

  console.error("Please provide an array (max 4 elements) for `margin` style helper.")
}

export default margin
