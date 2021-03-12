import Layout from "@components/layout"
import Seo from "@components/seo"
import Flex from "@components/flex"
import { Title, Text } from "@components/typography"
import KnowUsBetter from "@organisms/knowUsBetter"

const seoTitle = "About us | Ποιοί είμαστε"
const seoDescription = `Το Amberele είναι ένα ελληνικό brand το οποίο δημιουργήθηκε τον χειμώνα 2019 από την
ελληνίδα σχεδιάστριά του, Ηλέκτρα.`

const AboutUs = () => (
  <Layout>
    <Seo title={seoTitle} description={seoDescription} />
    <Flex column gap={6} padding={[20, 4]} width={{ max: "960px" }} margin={[0, "auto"]}>
      <Title serif>About us</Title>
      <Text>Καλώς ήρθες στον κόσμο του Amberele!</Text>
      <Text>
        Το Amberele είναι ένα ελληνικό brand το οποίο δημιουργήθηκε τον χειμώνα 2019 από την
        ελληνίδα σχεδιάστριά του, Ηλέκτρα. Η λέξη "Amberele" είναι εμπνευσμένη από την ίδια και το
        αγόρι της, δημιουργό και σχεδιαστή της σελίδας Παντελή.
      </Text>
      <Text>
        Η λέξη Amberele προέρχεται από τις λέξεις " amber" και "ele". Amber στα ελληνικά σημαίνει
        κεχριμπάρι και είναι μια απολιθωμένη ρητίνη, γνωστή για την απαράμιλη ομορφία του και το
        χρώμα του και χρησιμοποιείται για την κατασκευή διακοσμητικών αντικειμένων και κοσμημάτων.
        Ακόμα είναι γνωστό για τις θεραπευτικές του ιδιότητες, καθώς το άρωμα που απελευθερώνει
        διεγείρει όλες τις αισθήσεις.
      </Text>
      <Text>
        Οι πιο γνωστές ονομασίες για τη λέξη amber είναι “Electrum” στα λατινικά and “ἤλεκτρον
        (ēlektron)” στα αρχαία ελληνικά και συνδέονται με τον όρο ἠλέκτωρ (ēlektōr), που σημαίνει
        αστραφτερός, λαμπερός. Το Ele προήλθε από το αρχαίο ελληνκό όνομα Electra ή Ηλέκτρα που
        σημαίνει λαμπερή, φωτεινή.
      </Text>
      <Text>
        Η Amberele παρουσιάζει με έναν μοναδικό τρόπο, bohemian, χειροποίητα και macrame αξεσουάρ,
        κατασκευασμένα από 100% οργανικά και φιλικά προς το περιβάλλον υλικά, δημιουργώντας μια
        μοναδική εμφάνιση που χαρακτηρίζει την κάθε γυναίκα. Κάθε κομμάτι είναι μοναδικό, γιατί και
        η κάθε γυναίκα είναι μοναδική.
      </Text>
      <Text>Μπες στον bohemian κόσμο της Amberele και μοιράσου μαζί μας την ιστορία σου.</Text>
      <Text>Be unique - It's all about Amberele.</Text>
    </Flex>
    <KnowUsBetter />
  </Layout>
)

export default AboutUs
