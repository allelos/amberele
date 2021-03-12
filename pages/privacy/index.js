import { useMemo } from "react"
import Layout from "@components/layout"
import Seo from "@components/seo"
import Flex from "@components/flex"
import HtmlBlock from "@components/htmlBlock"
import { Subtitle } from "@components/typography"
import { getPolicies, parseResponse } from "@dataSource/index"

const Privacy = ({ title, body }) => {
  const markup = useMemo(
    () => ({
      __html: body
    }),
    [body]
  )

  return (
    <Layout>
      <Seo title="Πολιτική απορρήτου" />
      <Flex column padding={[8, 4]} width={{ max: "960px" }} margin={[0, "auto"]} gap={8}>
        <Subtitle strong>{title}</Subtitle>
        <HtmlBlock dangerouslySetInnerHTML={markup} />
      </Flex>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await getPolicies()

  const { privacyPolicy: privacy } = parseResponse(res, null)

  return {
    props: { ...privacy }
  }
}

export default Privacy
