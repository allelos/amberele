import Layout from "@components/layout"
import Seo from "@components/seo"
import Flex from "@components/flex"
import { Title } from "@components/typography"
import Products from "@organisms/products"
import { getProducts, parseResponse } from "@dataSource/index"

const ProductsPage = ({ items, pageTitle }) => {
  return (
    <Layout>
      <Seo title={pageTitle} />
      <Flex column width={{ max: "1080px" }} margin={[0, "auto"]} padding={[10, 4, 30, 4]} gap={12}>
        <Title serif>\ συλλογή</Title>
        <Products items={items} />
      </Flex>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await getProducts()
  const products = parseResponse(res, [])
  return {
    props: {
      items: products.reverse(),
      pageTitle: "Bohemian World | Χειροποίητες Μακραμέ τσάντες & Αξεσουάρ"
    }
  }
}

export default ProductsPage
