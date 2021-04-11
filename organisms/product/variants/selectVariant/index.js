import { Text } from "@components/typography"
import Select from "@components/select"

const SelectVariant = ({ option: { name, values }, onSelect }) => {
  const label = `Διάλεξε ${name.toLowerCase()}:`

  return (
    <Select
      width="160px"
      order={1}
      label={label}
      name={name}
      onChange={onSelect}
      padding={[0, 0, 2]}
    >
      {values.map(({ value }) => (
        <Text as="option" value={value} key={value} small>
          {value}
        </Text>
      ))}
    </Select>
  )
}

export default SelectVariant
