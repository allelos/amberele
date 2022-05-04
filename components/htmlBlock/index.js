import styled from "@emotion/styled"
import fontFamily from "@components/mixins/fontFamily"
import Flex from "@components/flex"

const HtmlBlock = styled(Flex)`
  flex-direction: column;
  font-size: 16px;
  ${fontFamily};
  line-height: 1.6;
  letter-spacing: -0.025em;

  ul {
    padding: 0;
    margin: 0;
    margin-bottom: 16px;
    list-style-position: inside;
  }

  li,
  p {
    margin: 0;
  }

  p {
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  li:last-child {
    margin-bottom: 0px;
  }

  a {
    font-weight: normal;
    text-decoration: underline;
    color: #0d4a68;
  }
`

export default HtmlBlock
