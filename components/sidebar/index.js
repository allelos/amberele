import { useState, useEffect, useCallback, useRef } from "react"
import { css } from "@emotion/react"
import Flex from "@components/flex"
import useClickOutside from "./useClickOutside"

const animationMixin = ({ show }) => css`
  top: 0;
  right: 0;
  transform: translateX(${show ? "0%" : "100%"});
  transition: transform 0.75s ease;
  will-change: transform;
`

const Sidebar = ({ children, open, onToggle }) => {
  const [show, setShow] = useState(open)

  const ref = useRef()

  const hide = () => setShow(false)

  useClickOutside(ref, hide)

  useEffect(() => {
    if (open) setShow(true)
  }, [open])

  const onTransitionEnd = useCallback(() => {
    if (!show) onToggle()
  }, [show])

  const render = useCallback(() => children({ hide }), [children, hide])

  if (!open) return null

  return (
    <Flex
      ref={ref}
      column
      position="fixed"
      height="100%"
      padding={[6]}
      zIndex={20}
      background="#fff"
      css={animationMixin({ show })}
      onTransitionEnd={onTransitionEnd}
      justifyContent="between"
      elevation={2}
    >
      {render()}
    </Flex>
  )
}

export default Sidebar
