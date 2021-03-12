import styled from "@emotion/styled"
import Link from "next/link"
import Flex from "@components/flex"
import Button from "@components/buttons"
import { Subtitle, Text } from "@components/typography"
import Product from "@organisms/collection/product"

const Grid = styled(Flex)`
  display: block;
  column-width: auto;
  column-count: 2;
  column-gap: 48px;
`

const onMedium = `
  display: flex; 
  padding-top: 16px;
`

const Collection = ({ items, title, subtitle, footer, link, label }) => {
  return (
    <Flex column padding={[0, 4]}>
      <Grid column width={{ max: "1080px" }} margin={[0, "auto"]} padding={[32, 0]} md={onMedium}>
        <Flex column padding={[8, 0]} gap={4}>
          <Subtitle strong>{title}</Subtitle>
          <Text>{subtitle}</Text>
        </Flex>
        {items.map(({ id, title, images, handle }) => (
          <Product key={id} title={title} imageSrc={images[0]?.src} handle={handle} />
        ))}
        <Flex column alignItems="center" padding={[4, 0]} gap={5}>
          <Subtitle strong>{footer}</Subtitle>
          <Link href={link} passHref>
            <Button as="a" background="white" color="dark">
              {label}
            </Button>
          </Link>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default Collection
