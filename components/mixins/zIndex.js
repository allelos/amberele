const zIndex = ({ zIndex }) => {
  if (!zIndex || typeof zIndex !== "number") return
  return `z-index: ${zIndex};`
}

export default zIndex
