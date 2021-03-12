const textDecoration = ({ underline = false, dotted = false, hover = false }) => {
  if (underline || dotted) {
    const decoration = underline ? "underline" : "dotted"
    return `
            text-decoration: ${hover ? "none" : decoration};
            &:hover {
              text-decoration: ${decoration};
            }
          `
  }
  return ""
}

export default textDecoration
