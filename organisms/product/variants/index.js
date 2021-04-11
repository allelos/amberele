import { useState, useEffect } from "react"
import Flex from "@components/flex"
import SelectVariant from "./selectVariant"

const getSelected = ({ options, selected }) =>
  options.map(({ name, values }) => (selected[name] ? selected[name] : values[0].value)).join(" / ")

const Variants = ({ options, onChange }) => {
  const [selected, setSelected] = useState()

  useEffect(() => {
    if (selected && onChange) onChange(getSelected({ options, selected }))
  }, [selected, options])

  const onSelect = ({ target: { name, value } }) => setSelected(s => ({ ...s, [name]: value }))

  return (
    <Flex gap={8} flexWrap>
      {options.map(option => (
        <SelectVariant key={option.name} option={option} onSelect={onSelect} />
      ))}
    </Flex>
  )
}

export default Variants
