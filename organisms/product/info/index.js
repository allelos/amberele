import { useMemo, useCallback, useState } from "react"
import Flex from "@components/flex"
import ProductDescription from "./description"
import Header from "./header"
import BuyButton from "../buyButton"
import Back from "../back"
import Variants from "../variants"

const ProductInfo = ({ title, variants, options, descriptionHtml }) => {
  const [variant, setVariant] = useState(0)
  const { price, compareAtPrice, id, available } = variants[variant]
  const hasVariants = variants.length > 1

  const item = useMemo(() => ({ name: title, price, id, available }), [title, price, id, available])

  const onChange = useCallback(
    option => {
      const selectedVariant = variants.map(({ title }) => title).indexOf(option)
      setVariant(selectedVariant)
    },
    [variants]
  )

  return (
    <Flex position="relative" flex alignItems="center" padding={[4]}>
      <Flex column gap={6} width={{ max: "512px" }} margin={[0, "auto"]}>
        <Back />
        <Header title={title} price={price} compareAtPrice={compareAtPrice} />
        {hasVariants && <Variants options={options} onChange={onChange} />}
        <ProductDescription description={descriptionHtml} />
        <BuyButton item={item}>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</BuyButton>
      </Flex>
    </Flex>
  )
}

export default ProductInfo
