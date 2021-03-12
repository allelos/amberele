const alignSelfMap = {
  end: "flex-end",
  start: "flex-start",
  center: "center",
  stretch: "stretch"
}
const alignSelf = ({ alignSelf }) =>
  alignSelf in alignSelfMap && `align-self: ${alignSelfMap[alignSelf]};`
export default alignSelf
