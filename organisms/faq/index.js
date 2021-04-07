import Link from "next/link"
import Flex from "@components/flex"
import { Title, Text } from "@components/typography"
import Accordion from "@components/accordion"

const Faq = () => {
  return (
    <Flex
      column
      width="100%"
      gap={8}
      width={{ max: "768px" }}
      margin={[0, "auto"]}
      padding={[44, 4, 60]}
    >
      <Title serif>Συχνές Ερωτήσεις</Title>
      <Flex column gap={4}>
        <Accordion
          header={
            <Text strong color="darkGray">
              Χρειάζεται να δημιουργήσω λογαριασμό για να κάνω παραγγελία;
            </Text>
          }
        >
          <Text small>
            Όχι, δεν χρειάζεται να δημιουργήσετε προσωπικό λογαριασμό για να παραγγείλετε στο{" "}
            <Link href="/" passHref>
              <Text as="a" small color="secondary" underline>
                www.amberele.com
              </Text>
            </Link>
            . Επιλέγοντας «ΟΛΟΚΛΗΡΩΣΕ ΤΗΝ ΠΑΡΑΓΓΕΛΙΑ ΣΟΥ» από το καλάθι, δημιουργείται ένας εφάπαξ,
            ασφαλής σύνδεμος από τον οποίο μεταφέρεστε στο περιβάλλον πληρωμής και εισαγωγής
            στοιχείων αποστολής.
          </Text>
        </Accordion>
        <Accordion
          header={
            <Text strong color="darkGray">
              Τι κάνω σε περίπτωση που έχω πρόβλημα με κάποιο προϊόν;
            </Text>
          }
        >
          <Text small>
            Όλα τα προϊόντα μας περνάνε από αυστηρό ποιοτικό έλεγχο καθώς κατασκευάζονται στο χέρι
            με μεγάλο σεβασμό και πολλή προσοχή. Αν ωστόσο αντιμετωπίσετε κάποιο πρόβλημα, παρακαλώ
            επικοινωνήστε μαζί μας στο{" "}
            <Text as="a" small href="mailto:contact@amberele.com" underline color="secondary">
              contact@amberele.com
            </Text>{" "}
            και θας σας ενημερώσουμε για την κάθε ενέργεια που πρέπει να γίνει.
          </Text>
        </Accordion>
        <Accordion
          header={
            <Text strong color="darkGray">
              Πώς μπορώ να επιστρέψω ένα προϊόν;
            </Text>
          }
        >
          <Text small>
            Οι επιστροφές και αλλαγές των προϊόντων πρέπει να γίνονται εντός 14 ημερών από την ημέρα
            παραλαβής και πραγματοποιούνται κατόπιν συνεννοήσεως.
          </Text>
        </Accordion>
        <Accordion
          header={
            <Text strong color="darkGray">
              Πότε θα παραλάβω το προϊόν που παρήγγειλα;
            </Text>
          }
        >
          <Text small>
            Ο χρόνος παράδοσης της παραγγελίας σας υπολογίζεται από 1 έως 10 εργάσιμες ημέρες από
            την ημέρα που την πραγματοποιήσατε! Για οποιαδήποτε απορία επικοινωνήστε μας στο{" "}
            <Text as="a" small href="mailto:contact@amberele.com" underline color="secondary">
              contact@amberele.com
            </Text>
          </Text>
        </Accordion>
        <Accordion
          header={
            <Text strong color="darkGray">
              Από ποιές χώρες μπορώ να κάνω παραγγελία;
            </Text>
          }
        >
          <Text small>
            Παραγγελία μπορείτε να κάνετε από οποιοδήποτε μέρος του κόσμου αλλά προς το παρόν
            εξυπηρετούμε αποστολές σε Ελλάδα και Κύπρο. Για οποιαδήποτε άλλη πληροφορία
            επικοινωνήστε μαζί μας.
          </Text>
        </Accordion>
      </Flex>
    </Flex>
  )
}

export default Faq
