import { Fragment, useMemo, useState } from "react"
import dynamic from "next/dynamic"
import Navigation from "@components/navigation"
import Footer from "@components/footer"

const Cart = dynamic(() => import("@organisms/cart"), { ssr: false })

const Layout = ({ children, sticky }) => {
  const [open, setOpen] = useState(false)
  const memoizedChildren = useMemo(() => children, [children])
  const onToggle = () => setOpen(o => !o)

  return (
    <Fragment>
      <Navigation onToggle={onToggle} sticky={sticky} />
      {memoizedChildren}
      <Footer />
      <Cart open={open} onToggle={onToggle} />
    </Fragment>
  )
}

export default Layout
