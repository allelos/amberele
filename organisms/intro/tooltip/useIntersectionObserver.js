import { useEffect, useRef, useCallback, useState } from "react"

const useIntersectionObserver = (options = { root: null, rootMargin: "0px", threshold: 0.1 }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef()

  const callback = useCallback(entries => {
    const [entry] = entries
    setVisible(entry.isIntersecting)
  }, [])

  useEffect(() => {
    if (!ref.current || visible) return

    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref.current)

    return () => ref.current && observer.unobserve(ref.current)
  }, [visible])

  return [ref, visible]
}

export default useIntersectionObserver
