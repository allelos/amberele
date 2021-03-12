import { css } from "@emotion/react"
import Image from "next/image"
import Link from "next/link"
import Flex from "@components/flex"
import Button from "@components/buttons"
import { Huge, Tertiary } from "@components/typography"

const responsiveHuge = css`
  @media (max-width: 400px) {
    font-size: 48px;
  }
`

const responsiveTertiary = css`
  @media (max-width: 400px) {
    font-size: 18px;
  }
`

const Hero = ({ imageSrc, title, subtitle, link, buttonLabel }) => {
  return (
    <Flex height="100vh" position="relative">
      <Image src={imageSrc} alt="hero-image" layout="fill" priority objectFit="cover" />
      <Flex
        position="absolute"
        alignItems="end"
        justifyContent="start"
        width="100%"
        height="100%"
        width={{ max: "640px" }}
      >
        <Flex
          column
          gap={4}
          alignItems="center"
          padding={[0, 6, 24, 6]}
          md={"padding-bottom: 32px"}
        >
          {title && (
            <Huge textAlign="center" serif css={responsiveHuge}>
              {title}
            </Huge>
          )}
          {subtitle && (
            <Tertiary textAlign="center" css={responsiveTertiary}>
              {subtitle}
            </Tertiary>
          )}
          {buttonLabel && link && (
            <Link href={link} passHref>
              <Button as="a">{buttonLabel}</Button>
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Hero
