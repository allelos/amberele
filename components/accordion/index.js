import { useState, useRef, useEffect, useCallback } from "react"
import Container from "./container"
import Header from "./header"
import Animated from "./animated"

const Accordion = ({ header, children, ...rest }) => {
  const [height, setHeight] = useState()
  const [open, setOpen] = useState()
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    let nestedRequestId
    const requestId = requestAnimationFrame(() => {
      setHeight(!open ? `${ref.current.scrollHeight}px` : "0px")
      nestedRequestId = requestAnimationFrame(() => {
        setHeight(open ? `${ref.current.scrollHeight}px` : "0px")
      })
    })

    return () => {
      cancelAnimationFrame(requestId)
      cancelAnimationFrame(nestedRequestId)
    }
  }, [open])

  const onClick = useCallback(() => setOpen(o => !o), [])

  return (
    <Container column onClick={onClick} {...rest}>
      <Header isOpen={open}>{header}</Header>
      <Animated ref={ref} maxHeight={height}>
        {children}
      </Animated>
    </Container>
  )
}
export default Accordion
