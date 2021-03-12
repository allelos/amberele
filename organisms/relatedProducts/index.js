import Link from "next/link"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import Flex from "@components/flex"
import { Text, Subtitle } from "@components/typography"
import "keen-slider/keen-slider.min.css"

const RelatedProducts = ({ title, items }) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 4,
    spacing: 16,
    breakpoints: {
      "(max-width: 768px)": {
        slidesPerView: 1
      }
    }
  })

  if (!items) return null

  return (
    <Flex column padding={[32, 4, 16]} gap={8}>
      {title && (
        <Subtitle strong textTransform="uppercase">
          {title}
        </Subtitle>
      )}
      <Flex ref={sliderRef} className="keen-slider">
        {items.map(({ id, title, handle, image }) => (
          <Flex key={id} className="keen-slider__slide">
            <Link href={`/products/${handle}`} passHref>
              <Flex as="a" column flex>
                <Image
                  src={image.src}
                  alt={`related-product-${title}`}
                  width={512}
                  height={512}
                  objectFit="cover"
                />
                <Text strong small textTransform="uppercase">
                  {title}
                </Text>
              </Flex>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default RelatedProducts
