import { useMemo } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

const seoDescription =
  "Πλεκτές χειροποίητες μακραμέ (macrame) τσάντες από 100% οργανικά και οικολογικά υλικά (vegan)."
const seoImageSrc = "/assets/images/hero.jpg"

const getMetaTitle = title => (title ? `Amberele | ${title}` : `Amberele`)
const getMetaDescription = str => `${str.substring(0, 155)}...`
const getCanonicalUrl = url => `https://www.amberele.com${url}`

const Seo = ({ title, description = seoDescription, image = seoImageSrc }) => {
  const { asPath } = useRouter()
  const getTitle = useMemo(() => getMetaTitle(title), [title])
  const getDescription = useMemo(() => getMetaDescription(description), [description])
  const getCanonical = useMemo(() => getCanonicalUrl(asPath), [])
  return (
    <Head>
      <title>{getTitle}</title>
      <meta name="description" content={getDescription} />
      <meta property="og:title" content={getTitle} />
      <meta property="og:description" content={getDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={getCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="el-GR" />
      <link rel="canonical" href={getCanonical} />
    </Head>
  )
}

export default Seo
