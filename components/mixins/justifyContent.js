const justifyContentMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  stretch: "stretch"
}

const justifyContent = ({ justifyContent }) =>
  justifyContent in justifyContentMap
    ? `justify-content: ${justifyContentMap[justifyContent]};`
    : ""

export default justifyContent
