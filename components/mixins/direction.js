const getDirection = (column, columnReverse, rowReverse) => {
  if (column) {
    return "column"
  }

  if (columnReverse) {
    return "column-reverse"
  }

  if (rowReverse) {
    return "row-reverse"
  }

  return "row"
}

const direction = ({ column, columnReverse, rowReverse }) => {
  const direction = getDirection(column, columnReverse, rowReverse)
  return `flex-direction: ${direction};`
}

export default direction
