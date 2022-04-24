import { useState, useCallback } from "react"
import Flex from "@components/flex"
import ProductImage from "./image"
import ProductImageThubmnails from "./thumbnails"

const directionMap = {
  right: lastImage => index => index < lastImage ? index + 1 : 0,
  left: lastImage => index => index > 0 ? index - 1 : lastImage
}

const ProductImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startPos, setStartPos] = useState(null)

  const onPan = useCallback(
    position => e => {
      const touch = e.changedTouches[0]

      if (position === "start") return setStartPos(touch.clientX)

      const direction = startPos > touch.clientX ? "right" : "left"
      const lastImage = images.length - 1

      const handler = directionMap[direction](lastImage)
      setCurrentIndex(handler)
    },
    [startPos, images]
  )

  return (
    <Flex
      position="relative"
      flex
      basis="50%"
      onTouchStart={onPan("start")}
      onTouchEnd={onPan("end")}
    >
      {images.map(({ src, id }, index) => (
        <ProductImage key={id} imageSrc={src} visible={index === currentIndex} />
      ))}
      <ProductImageThubmnails images={images} onChange={setCurrentIndex} />
    </Flex>
  )
}

export default ProductImages
