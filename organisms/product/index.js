import Flex from "@components/flex"
import ProductImages from "./images"
import ProductInfo from "./info"

const Product = ({ images, ...product }) => {
  return (
    <Flex height={{ min: "calc(100vh - 64px)" }} flexWrap>
      <ProductImages images={images} />
      <ProductInfo {...product} />
    </Flex>
  )
}

export default Product
