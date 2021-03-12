import { useCallback } from "react"
import Image from "next/image"

const Thumbnail = ({ imageSrc, onChange, index }) => {
  const onClick = useCallback(() => {
    if (onChange) onChange(index)
  }, [index])

  const alt = "product-thumbnail-image"
  const ariaLabel = `Product image ${index}`

  return (
    <Image
      alt={alt}
      src={imageSrc}
      height={32}
      width={32}
      objectFit="cover"
      role="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={onClick}
    />
  )
}

export default Thumbnail
