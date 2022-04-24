import styled from "@emotion/styled"
import Image from "next/image"
import Flex from "@components/flex"

const opacity = ({ show }) => (show ? "opacity: 1;" : "opacity: 0;")

const Container = styled(Flex)`
  ${opacity}
  transition: opacity 500ms ease-in-out;
`

const alt = "main-product-image"

const ProductImage = ({ imageSrc, visible }) => (
  <Container show={visible} height={{ min: "480px" }}>
    <Image alt={alt} src={imageSrc} layout="fill" objectFit="cover" />
  </Container>
)

export default ProductImage
