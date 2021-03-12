import Flex from "@components/flex"
import ProductDescription from "./description"
import Header from "./header"
import BuyButton from "../buyButton"
import Back from "../back"

const ProductInfo = ({ title, variants, descriptionHtml }) => {
  const [variant] = variants
  const { price, compareAtPrice, id } = variant

  return (
    <Flex position="relative" flex alignItems="center" padding={[4]}>
      <Flex column gap={6} width={{ max: "512px" }} margin={[0, "auto"]}>
        <Back />
        <Header title={title} price={price} compareAtPrice={compareAtPrice} />
        <ProductDescription description={descriptionHtml} />
        <BuyButton id={id}>ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</BuyButton>
      </Flex>
    </Flex>
  )
}

export default ProductInfo
