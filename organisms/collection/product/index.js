import Image from "next/image"
import Link from "next/link"
import Flex from "@components/flex"
import { Text } from "@components/typography"

const Product = ({ imageSrc, title, handle }) => {
  const productLink = `/products/${handle}`
  const alt = `${handle}-image`
  return (
    <Link href={productLink} passHref>
      <Flex as="a" column margin={[0, 0, 9]} gap={1}>
        <Flex position="relative" height={{ min: "480px" }}>
          <Image alt={alt} src={imageSrc} layout="fill" objectFit="cover" />
        </Flex>
        <Text strong small textTransform="uppercase">
          {title}
        </Text>
      </Flex>
    </Link>
  )
}

export default Product
