import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import Flex from "@components/flex"
import { Text } from "@components/typography"

const CartIcon = dynamic(() => import("./cartIcon"), { ssr: false })

const logo = "/assets/images/logo.png"
const logoSize = {
  width: 96,
  height: 25
}

const Navigation = ({ onToggle, sticky = true }) => (
  <Flex
    width="100%"
    height="64px"
    justifyContent="between"
    alignItems="center"
    padding={[5, 4]}
    position={sticky ? "sticky" : "absolute"}
    zIndex={10}
    background={sticky ? "white" : "transparent"}
    css={{
      top: 0
    }}
  >
    <Flex gap={6}>
      <Link href="/products" passHref>
        <Text as="a" small>
          shop
        </Text>
      </Link>
    </Flex>
    <Link href="/">
      <a>
        <Image src={logo} alt="amberele-navigaiton-logo" {...logoSize} />
      </a>
    </Link>
    <CartIcon onToggle={onToggle} />
  </Flex>
)

export default Navigation
