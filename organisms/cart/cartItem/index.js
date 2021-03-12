import { useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import Flex from "@components/flex"
import { Text, Small } from "@components/typography"
import Icon from "@components/icon"

const CartItem = ({ id, title, variant, quantity, remove, update }) => {
  const { id: variantId, price, image, product } = variant
  const { src } = image
  const { handle } = product
  const alt = `${title}-cart-image`
  const link = `/products/${handle}`

  const onRemove = useCallback(() => {
    remove(id)
  }, [id])

  const onMore = useCallback(() => {
    update({ id, variantId, quantity: quantity + 1 })
  }, [id, quantity, variantId])

  const onLess = useCallback(() => {
    update({ id, variantId, quantity: quantity - 1 })
  }, [id, quantity, variantId])

  return (
    <Flex alignItems="center" gap={2}>
      <Link href={link} passHref>
        <Image src={src} height={60} width={60} alt={alt} objectFit="cover" />
      </Link>
      <Flex flex column>
        <Text small>{title}</Text>
        <Text small>{price} &euro;</Text>
      </Flex>
      <Flex alignItems="center" gap={3}>
        <Flex column gap={1} alignItems="center">
          <Icon name="chevron" color="#111" rotate="reverse" small onClick={onMore} />
          <Small small>{quantity}</Small>
          <Icon name="chevron" color="#111" small onClick={onLess} />
        </Flex>
        <Icon name="close" color="#111" small onClick={onRemove} />
      </Flex>
    </Flex>
  )
}

export default CartItem
