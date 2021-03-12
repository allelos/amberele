const fontWeight = ({ strong, light }) => {
  if (!strong && !light) return `font-weight: 400;`
  if (strong) return `font-weight: 700;`
  if (light) return `font-weight: 300;`
}

export default fontWeight
