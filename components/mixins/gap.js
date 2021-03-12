import { baseUnit } from "./constants"

const gap = ({ gap, column, columnReverse }) => {
  if (!gap) {
    return ""
  }

  if (column || columnReverse) {
    return `
          & > *:not(:last-child) {
            margin-bottom: ${gap * baseUnit}px !important;
          }
        `
  }

  return `
         & > *:not(:last-child) {
          margin-right: ${gap * baseUnit}px !important;
        }
      `
}

export default gap
