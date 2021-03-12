import { useEffect } from "react"

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const clickOutside = e => {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) callback()
    }

    document.addEventListener("click", clickOutside)
    return () => document.removeEventListener("click", clickOutside)
  }, [callback])
}

export default useClickOutside
