import { useMemo, useCallback, useState } from "react"
import Flex from "@components/flex"
import ProductDescription from "./description"
import Header from "./header"
import BuyButton from "../buyButton"
import Back from "../back"
import SelectVariant from "../selectVariant"

const ProductInfo = ({ title, variants, options, descriptionHtml }) => {
  const [variant, setVariant] = useState(0)
  const { price, compareAtPrice, id } = variants[variant]

  const item = useMemo(() => ({ name: title, price, id }), [title, price, id])

  const onChange = useCallback(e => variants[e.target.value] && setVariant(e.target.value), [
    variants
  ])

  return (
    <Flex position="relative" flex alignItems="center" padding={[4]}>
      <Flex column gap={6} width={{ max: "512px" }} margin={[0, "auto"]}>
        <Back />
        <Header title={title} price={price} compareAtPrice={compareAtPrice} />
        {variants.length > 1 && <SelectVariant options={options} onChange={onChange} />}
        <ProductDescription description={descriptionHtml} />
        <BuyButton item={item}>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</BuyButton>
      </Flex>
    </Flex>
  )
}

export default ProductInfo
