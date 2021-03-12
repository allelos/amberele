import { useState } from "react"
import Flex from "@components/flex"
import ProductImage from "./image"
import ProductImageThubmnails from "./thumbnails"

const ProductImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <Flex position="relative" flex basis="50%">
      {images.map(({ src, id }, index) => (
        <ProductImage key={id} imageSrc={src} imageIndex={index} visible={index === currentIndex} />
      ))}
      <ProductImageThubmnails images={images} onChange={setCurrentIndex} />
    </Flex>
  )
}

export default ProductImages
