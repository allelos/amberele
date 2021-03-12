import { useMemo } from "react"
import HtmlBlock from "@components/htmlBlock"

const Description = ({ description }) => {
  const markup = useMemo(
    () => ({
      __html: description
    }),
    [description]
  )
  return <HtmlBlock order={1} sm={{ order: 2 }} dangerouslySetInnerHTML={markup} />
}

export default Description
