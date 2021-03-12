import dynamic from "next/dynamic"
import Layout from "@components/layout"
import Seo from "@components/seo"
import Product from "@organisms/product"
import { getProducts, getProductByHandle, parseResponse } from "@dataSource/index"

const RelatedProducts = dynamic(() => import("@organisms/relatedProducts"))

const ProductPage = ({ seoTitle, seoImage, seoDescription, product, relatedProducts }) => {
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} image={seoImage} />
      <Product {...product} />
      <RelatedProducts title="ΔΕΣ ΕΠΙΣΗΣ" items={relatedProducts} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const res = await getProducts()
  const entries = parseResponse(res, [])

  const paths = entries.map(({ handle: slug }) => ({ params: { slug } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const [res1, res2] = await Promise.all([getProductByHandle(slug), getProducts()])

  const product = parseResponse(res1, {})
  const relatedProducts = parseResponse(res2, []).reduce(
    (acc, { id, title, handle, images: [image] = {} }) => {
      acc.push({ id, title, handle, image })
      return acc
    },
    []
  )

  const { images, title, description: seoDescription } = product
  const [image] = images
  const { src: seoImage } = image
  const seoTitle = `Χειροποίητες Τσάντες | ${title}`

  return { props: { product, relatedProducts, seoTitle, seoImage, seoDescription } }
}

export default ProductPage
