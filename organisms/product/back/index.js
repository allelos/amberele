import Link from "next/link"
import { Text } from "@components/typography"

const Back = () => (
  <Link href="/products" passHref>
    <Text as="a" strong small>/ Επιστροφή στα προϊόντα</Text>
  </Link>
)

export default Back
