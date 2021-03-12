const getWrap = flexWrap => {
  if (flexWrap === true) {
    return "wrap"
  }

  if (flexWrap === false) {
    return "nowrap"
  }

  return flexWrap === "reverse" ? "wrap-reverse" : ""
}

const wrap = ({ flexWrap }) => {
  const value = getWrap(flexWrap)
  return value && `flex-wrap: ${value};`
}

export default wrap
