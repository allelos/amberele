import Flex from "@components/flex"
import ProductImageThumbnail from "../thumbnail"

const Thubmnails = ({ images, onChange }) => {
  return (
    <Flex alignItems="end" padding={[2]} gap={1} width="100%">
      {images.map(({ src, id }, index) => (
        <ProductImageThumbnail key={id} imageSrc={src} onChange={onChange} index={index} />
      ))}
    </Flex>
  )
}

export default Thubmnails
