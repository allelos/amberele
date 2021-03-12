const textTransformSet = new Set(["uppercase", "capitalize", "lowercase"])

const textTransform = ({ textTransform = "none" }) =>
  textTransformSet.has(textTransform) && `text-transform: ${textTransform};`

export default textTransform
