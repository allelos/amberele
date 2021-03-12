import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"
import Flex from "@components/flex"
import { Text, Small } from "@components/typography"

const InitialPrice = styled(Small)`
  text-decoration: line-through rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
`

const Product = ({ title, images, variants, handle }) => {
  const [image] = images
  const [variant] = variants

  const { src } = image
  const { price, compareAtPrice } = variant

  const alt = `${handle}-image`
  const productLink = `/products/${handle}`

  return (
    <Link href={productLink} passHref>
      <Flex as="a" column gap={1}>
        <Image alt={alt} src={src} layout="responsive" width={480} height={480} objectFit="cover" />
        <Text strong textTransform="uppercase" small>
          {title}
        </Text>
        <Flex gap={2}>
          {compareAtPrice && <InitialPrice>{compareAtPrice} &euro;</InitialPrice>}
          <Small>{price} &euro;</Small>
        </Flex>
      </Flex>
    </Link>
  )
}

export default Product
