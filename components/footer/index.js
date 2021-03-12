import Image from "next/image"
import Link from "next/link"
import Flex from "@components/flex"
import { Small } from "@components/typography"
import { responsiveMixin } from "./helpers"

const logo = "/assets/images/favicon.png"
const logoSize = {
  width: 48,
  height: 48
}

const Footer = () => (
  <Flex as="footer" column padding={[12, 4]} gap={16} background="#f9f4f4">
    <Flex alignItems="center" gap={6}>
      <Flex flex height="1px" background="#ccc" />
      <Link href="/">
        <a>
          <Image src={logo} alt="amberele-footer-logo" {...logoSize} />
        </a>
      </Link>
      <Flex flex height="1px" background="#ccc" />
    </Flex>
    <Flex justifyContent="around" css={responsiveMixin}>
      <Flex column gap={2}>
        <Small strong>ΕΧΕΙΣ ΕΡΩΤΗΣΕΙΣ?</Small>
        <Small as="a" href="mailto:contact@amberele.com">
          contact@amberele.com
        </Small>
      </Flex>
      <Flex column gap={2} alignItems="center">
        <Small strong>Η ΕΤΑΙΡΕΙΑ</Small>
        <Link href="/aboutus" passHref>
          <Small as="a">Σχετικά με εμάς</Small>
        </Link>
        <Link href="/faq" passHref>
          <Small as="a">Συχνές Ερωτήσεις</Small>
        </Link>
        <Link href="/privacy" passHref>
          <Small as="a">Πολιτική Απορρήτου</Small>
        </Link>
        <Link href="/termsofuse" passHref>
          <Small as="a">Όροι χρήσης</Small>
        </Link>
      </Flex>
      <Flex column gap={2} alignItems="center">
        <Small strong>ΑΚΟΛΟΥΘΗΣΕ ΜΑΣ</Small>
        <Small
          as="a"
          href="https://www.facebook.com/amberele.shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Small>
        <Small
          as="a"
          href="https://www.instagram.com/amber.ele/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Small>
      </Flex>
    </Flex>
    <Small small textAlign="center">
      Amberele and Amberele design are trademarks and/or registered trademarks of Amberele, Inc. or
      its affiliates.
    </Small>
  </Flex>
)

export default Footer
