const width = ({ width }) => {
  if (typeof width === "object") {
    const { min = "", max = "", width: w = "" } = width
    return `
        ${w && `width: ${w};`}
        ${min && `min-width: ${min};`}
        ${max && `max-width: ${max};`}
      `
  }

  return width && `width: ${width};`
}

export default width
