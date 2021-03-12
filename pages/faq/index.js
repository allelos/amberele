import Link from "next/link"
import Layout from "@components/layout"
import Seo from "@components/seo"
import Flex from "@components/flex"
import { Title, Text } from "@components/typography"
import KnowUsBetter from "@organisms/knowUsBetter"

const Faq = () => (
  <Layout>
    <Seo title="Συχνές Ερωτήσεις" />
    <Flex column gap={6} padding={[20, 4]} width={{ max: "960px" }} margin={[0, "auto"]}>
      <Title serif>F.A.Q.</Title>
      <Flex column gap={4}>
        <Text strong>Χρειάζεται να δημιουργήσω λογαριασμό για να κάνω παραγγελία;</Text>
        <Text small>
          Όχι, δεν χρειάζεται να δημιουργήσετε προσωπικό λογαριασμό για να παραγγείλετε στο{" "}
          <Link href="/" passHref>
            <Text as="a" color="secondary" underline>
              www.amberele.com
            </Text>
          </Link>
          . Επιλέγοντας «ΟΛΟΚΛΗΡΩΣΕ ΤΗΝ ΠΑΡΑΓΓΕΛΙΑ ΣΟΥ» από το καλάθι, δημιουργείται ένας εφάπαξ,
          ασφαλής σύνδεμος από τον οποίο μεταφέρεστε στο περιβάλλον πληρωμής και εισαγωγής στοιχείων
          αποστολής.
        </Text>
        <Text strong>Τί κάνω σε περίπτωση που έχω πρόβλημα με κάποιο προϊόν;</Text>
        <Text>
          Όλα τα προϊόντα μας περνάνε από αυστηρό ποιοτικό έλεγχο καθώς κατασκευάζονται στο χέρι με
          μεγάλο σεβασμό και πολλή προσοχή. Αν ωστόσο αντιμετωπίσετε κάποιο πρόβλημα, παρακαλώ
          επικοινωνήστε μαζί μας στο <a href="mailto:contact@amberele.com">contact@amberele.com</a>{" "}
          και θας σας ενημερώσουμε για την κάθε ενέργεια που πρέπει να γίνει.
        </Text>
        <Text strong>Πώς μπορώ να επιστρέψω ένα προϊόν;</Text>
        <Text>
          Οι επιστροφές και αλλαγές των προϊόντων πρέπει να γίνονται εντός 14 ημερών από την ημέρα
          παραλαβής και πραγματοποιούνται κατόπιν συνεννοήσεως.
        </Text>
        <Text strong>Πότε θα παραλάβω το προϊόν που παρήγγειλα;</Text>
        <Text>
          Ο χρόνος παράδοσης της παραγγελίας σας υπολογίζεται από 1 έως 10 εργάσιμες ημέρες από την
          ημέρα που την πραγματοποιήσατε! Για οποιαδήποτε απορία επικοινωνήστε μας στο{" "}
          <Text as="a" href="mailto:contact@amberele.com" underline color="secondary">
            contact@amberele.com
          </Text>
        </Text>
        <Text strong>Από ποιές χώρες μπορώ να κάνω παραγγελία;</Text>
        <Text>
          Παραγγελία μπορείτε να κάνετε από οποιοδήποτε μέρος του κόσμου αλλά προς το παρόν
          εξυπηρετούμε αποστολές σε Ελλάδα και Κύπρο. Για οποιαδήποτε άλλη πληροφορία επικοινωνήστε
          μαζί μας.
        </Text>
      </Flex>
    </Flex>
    <KnowUsBetter />
  </Layout>
)

export default Faq
