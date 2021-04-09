import { Text } from "@components/typography"
import Select from "@components/select"

const SelectVariant = ({ options, onChange }) => {
  const [option] = options
  const { values, name } = option
  const label = `Διάλεξε ${name.toLowerCase()}:`

  return (
    <Select order={1} label={label} onChange={onChange} width="160px">
      {values.map(({ value }, index) => (
        <Text as="option" value={index} key={value} small>
          {value}
        </Text>
      ))}
    </Select>
  )
}

export default SelectVariant
