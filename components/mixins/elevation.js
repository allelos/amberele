const elevationMap = ["#0000000d", "#00000030"]

const elevation = ({ elevation }) => {
  if (!elevation) return
  if (typeof elevation !== "number") return
  return `box-shadow: 0px 1px 32px 0px ${elevationMap[elevation - 1]};`
}

export default elevation
