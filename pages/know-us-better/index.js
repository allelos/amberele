import dynamic from "next/dynamic"
import Image from "next/image"
import Layout from "@components/layout"
import Seo from "@components/seo"
import Flex from "@components/flex"
import { Text, Huge } from "@components/typography"
import Section from "@organisms/knowUsBetter/section"
import TextWrapper from "@organisms/knowUsBetter/textWrapper"
import { getProducts, parseResponse } from "@dataSource/index"

const RelatedProducts = dynamic(() => import("@organisms/relatedProducts"))

const sections = [
  {
    image: { src: "/assets/images/know_us_better_1.jpg", width: 512, height: 768 },
    content: [
      `Η συνάντηση της Amberele και του μακραμέ, έγινε κάπως απρόσμενα, ένα καλοκαίρι.
  Κάπου εκεί σκέφτηκα να δημιουγήσω για κάθε γυναίκα και κάθε στυλ μοναδικές
  χειροποίητες πλεκτές τσάντες.`,
      `Βαμβακερά και οικολογικά κορδόνια, άλλοτε μονόκλωνα και άλλοτε τρίκλωνα, πλέκονται
  μεταξύ τους σε μοναδικούς κόμπους, ώστε να δημιουργήσουν το τέλειο αποτέλεσμα.`,
      `Κάθε χειροποίητο κομμάτι είναι μοναδικό και κατασκευασμένο με αγάπη και μεράκι για
  την κάθε μια ξεχωριστά. Τα ονόματα για κάθε μια μακραμέ τσάντα είναι εμπνευσμένα από
  την αρχαία Ελληνική μυθολογία. Έτσι λοιπόν, κάθε κομμάτι "κρύβει" πίσω του και μια
  ιστορία.`
    ]
  },
  {
    image: { src: "/assets/images/know_us_better_ilektra.jpg", width: 576, height: 768 },
    content: [
      `Οι επιρροές ήταν πολλές και μοναδικές, όπως μερικά ταξίδια σε ακρώς bohemian
      προορισμούς.`,
      `Εκεί ανακάλυψα το μακραμέ και έτσι η amberele "γεννήθηκε" μέσα από τα ταξίδια της.
      Σε ένα από αυτά γεννήθηκε και η ιδέα της Circe, όπου αναμφίβολλα την έχετε βάλει
      όλες στην καρδιά σας.`,
      `Η αγάπη μου για την amberele και για τη γυναίκα μου δίνει δύναμη για να δημιουργώ
      μοναδικά κομμάτια που θα σας χαρίσουν μοναδικές στιγμές.`
    ]
  },
  {
    image: { src: "/assets/images/know_us_better_macrame_history.jpg", width: 394, height: 600 },
    content: [
      `Η ιστορία του μακραμέ χρονολογείτε αιώνες πρίν και είναι γνωστή για τους περίτεχνους
      κόμπους της.`,
      `Γύρω στον 13ο αιώνα πρωτοεμφανίζεται η τέχνη του μακραμέ στις Αραβικές χώρες, για
      αυτο το όνομα "macrame" είναι πιθανό να προέρχεται από το Αραβικό "migramah", που
      σημαίνει κρόσσι, χοντρή δαντέλα. Έτσι οι Άραβες είναι ο λόγος για την εξάπλωση του
      μακραμέ στην Ευρώπη. Τελικά τη τέχνη την υιοθετούν και οι ναυτικοί, όπου ενσωμάτωσαν
      σε αυτή και τη δική τους τέχνη κομποδεσίματος φτίαχνοντας διάφορα διακοσμητικά, όπου
      και τα αντάλλαζαν σε ξένα λιμάνια.`,
      `Μέχρι τον 15ο αιώνα, η Ισπανία ήταν υπό την κυριαρχία των Μαυριτανών. Έτσι οι
      Ισπανοί μαθαίνουν την τέχνη στους Μαυριτανούς και αργότερα αυτό βοηθάει στο να
      εξαπλωθεί το μακραμέ και στη Γαλλία τον 15ο έως τον 16ο αιώνα και στην Ιταλία τον
      17ο έως τον 18ο αιώνα. Ταυτόχρονα, το μακραμέ έγινε γνωστό και στην Αγγλία τον 16ο
      αιώνα.`,
      `Μετά τα χρόνια της μεγάλης άνθησης του μακραμε στην Ευρώπη από τους Άραβες, η τέχνη
      χάθηκε μέχρι που επανήλθε τη δεκαετία του '60 και '70. Σήμερα πλέον η τεχνική του
      μακραμε έχει εξελιχθεί και επανέρχεται στη μόδα χαρίζοντας σας μοναδικά κομμάτια.`
    ]
  }
]

const seoTitle = "Γνώρισε μας καλύτερα"
const seoDescription = `Η συνάντηση της Amberele και του μακραμέ, έγινε κάπως απρόσμενα, ένα καλοκαίρι.
Κάπου εκεί σκέφτηκα να δημιουγήσω για κάθε γυναίκα και κάθε στυλ μοναδικές
χειροποίητες πλεκτές τσάντες.`
const seoImage = "/assets/images/know_us_better_2.jpg"

const OurStory = ({ relatedProducts }) => {
  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} image={seoImage} />
      <Flex
        as="main"
        column
        gap={32}
        width={{ width: "100%", max: "1280px" }}
        margin={["auto"]}
        padding={[0, 0, 32]}
      >
        <Image
          src="/assets/images/know_us_better_2.jpg"
          alt="know-us-better-hero"
          width={1280}
          height={768}
          objectFit="cover"
        />
        <Huge serif>Γνώρισε μας καλύτερα</Huge>
        {sections.map(({ image, content }, index) => (
          <Section key={index} flexWrap={index % 2 ? "reverse" : true}>
            <Flex order={index % 2}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={`know-us-better-${index}`}
                objectFit="cover"
              />
            </Flex>
            <TextWrapper order={0}>
              {content.map((text, index) => (
                <Text key={`content-${index}`} light>
                  {text}
                </Text>
              ))}
            </TextWrapper>
          </Section>
        ))}
        <RelatedProducts items={relatedProducts} />
      </Flex>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await getProducts()

  const relatedProducts = parseResponse(res, []).reduce(
    (acc, { id, title, handle, images: [image] = {} }) => {
      acc.push({ id, title, handle, image })
      return acc
    },
    []
  )

  return { props: { relatedProducts } }
}

export default OurStory
