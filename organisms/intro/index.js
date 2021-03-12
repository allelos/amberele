import { css } from "@emotion/react"
import Image from "next/image"
import Link from "next/link"
import { Title, Tertiary, Text } from "@components/typography"
import { Grid, Column } from "./grid"

const responsiveMixin = css`
  padding: 120px 48px;
  top: -64px;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin: auto;
  }

  @media (max-width: 475px) {
    max-width: 100%;
  }

  @media (max-width: 375px) {
    padding: 48px 16px;
  }
`
const Intro = ({ imageSrc, title, subtitle, text, link, label }) => {
  return (
    <Grid>
      <Column main position="relative">
        <Image src={imageSrc} width={340} height={512} alt="intro-image" layout="responsive" />
      </Column>
      <Column
        column
        position="relative"
        zIndex={2}
        padding={[40, 16]}
        gap={8}
        elevation={1}
        background="white"
        css={responsiveMixin}
      >
        {title && (
          <Title strong>
            {title}
          </Title>
        )}
        {subtitle && <Tertiary serif>{subtitle}</Tertiary>}
        {text && <Text>{text}</Text>}
        {link && label && (
          <Link href={link} passHref>
            <Text as="a" underline strong color="secondary">
              {label}
            </Text>
          </Link>
        )}
      </Column>
    </Grid>
  )
}

export default Intro
