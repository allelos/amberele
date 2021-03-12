const textAlignSet = new Set(["left", "center", "right"])

const textAlign = ({ textAlign }) => textAlignSet.has(textAlign) && `text-align: ${textAlign};`

export default textAlign
