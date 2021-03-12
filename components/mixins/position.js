const position = ({ position }) =>
  position && typeof position === "string" ? `position: ${position};` : "position: static;"

export default position
