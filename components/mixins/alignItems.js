const alignItemValuesMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  baseline: "baseline",
  stretch: "stretch"
}

const alignItems = ({ alignItems }) =>
  alignItems in alignItemValuesMap ? `align-items: ${alignItemValuesMap[alignItems]};` : ""

export default alignItems
