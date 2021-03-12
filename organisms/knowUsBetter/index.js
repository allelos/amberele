import styled from "@emotion/styled"
import Link from "next/link"
import Image from "next/image"
import Flex from "@components/flex"
import { Text, Tertiary } from "@components/typography"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  max-width: 1440px;
  margin: 0 auto 64px;
  background: #fbfbfb;
`

const KnowUsBetter = () => {
  return (
    <Grid>
      <Flex position="relative">
        <Image
          src="/assets/images/know-us-better.jpg"
          height={512}
          width={1024}
          objectFit="cover"
          alt="know-us-better"
        />
      </Flex>
      <Flex column gap={6} alignSelf="end" padding={[4, 16, 16]}>
        <Flex column gap={2}>
          <Link href="/know-us-better" passHref>
            <Tertiary as="a">Μάθε περισσότερα για το Amberele</Tertiary>
          </Link>
          <Text small>Γνώρισε μας καλύτερα.</Text>
        </Flex>
        <Link href="/know-us-better" passHref>
          <Text as="a" color="secondary" underline>
            Διάβασε περισσότερα
          </Text>
        </Link>
      </Flex>
    </Grid>
  )
}

export default KnowUsBetter
