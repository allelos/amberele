import dynamic from "next/dynamic"
import Layout from "@components/layout"
import Seo from "@components/seo"
import Hero from "@organisms/hero"
import Intro from "@organisms/intro"
import Collection from "@organisms/collection"
import KnowUsBetter from "@organisms/knowUsBetter"
import { getCollectionById, parseResponse } from "@dataSource/index"

const Faq = dynamic(() => import("@organisms/faq"))

const title = "Opulence meets bohemian"
const subtitle = "Enhance your style with our luxurious, sophisticated & handcrafted creations"
const buttonLabel = "ΑΓΟΡΑ ΤΩΡΑ"
const link = "/products"
const imageSrc = "/assets/images/hero.jpg"

const introTitle = "Χειροποίητες macrame τσάντες για κάθε τύπο γυναίκας"
const introSubtitle = "Ένα αξεσουάρ που δεν αποχωρίζεται ποτέ μια γυναίκα"
const introText =
  "Η Amberele δημιουργεί μοναδικά κομμάτια εμπνευσμένα από την Ελληνική κουλτούρα, σε boho-chic γραμμές με έναν μοναδικό και περίτεχνο τρόπο, χρησιμοποιώντας την τέχνη του μακραμέ και 100% οργανικά υλικά."
const introLabel = "Ανακαλυψε ολες τις τσάντες"
const introImageSrc = "/assets/images/intro.jpg"

const collectionTitle = "Υψηλής ποιότητας πλεκτές macrame τσάντες"
const collectionSubtitle =
  "Συνεχώς εξελισσόμαστε και δημιουργούμε καινούργιες γραμμές, που θα λατρέψει η κάθε γυναίκα."
const collectionFooter = "Ανακάλυψε όλες τις τσάντες"
const collectionLabel = "Δες ολη την συλλογή"

const Index = ({ items, pageTitle }) => (
  <Layout sticky={false}>
    <Seo title={pageTitle} />
    <Hero
      imageSrc={imageSrc}
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      link={link}
    />
    <Intro
      imageSrc={introImageSrc}
      title={introTitle}
      subtitle={introSubtitle}
      text={introText}
      link={link}
      label={introLabel}
    />
    <Collection
      items={items}
      title={collectionTitle}
      subtitle={collectionSubtitle}
      footer={collectionFooter}
      link={link}
      label={collectionLabel}
    />
    <KnowUsBetter />
    <Faq />
  </Layout>
)

export default Index

export const getStaticProps = async () => {
  const res = await getCollectionById("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzE3MjI1NzgzNzE0Mg==")

  const { products } = parseResponse(res, null)

  return {
    props: {
      items: products,
      pageTitle: "Bohemian World | Χειροποίητες Μακραμέ τσάντες & Αξεσουάρ"
    }
  }
}
