import useIntersectionObserver from "./useIntersectionObserver"
import Container from "./container"

const Tooltip = ({ children, ...rest }) => {
  const [ref, visible] = useIntersectionObserver({ rootMargin: "-25%", threshold: 1.0 })

  return (
    <Container
      ref={ref}
      elevation={2}
      position="absolute"
      background="black"
      zIndex={2}
      padding={[2, 3]}
      column
      gap={1}
      opacity={visible ? 1 : 0}
      visible={visible}
      {...rest}
    >
      {children}
    </Container>
  )
}

export default Tooltip
