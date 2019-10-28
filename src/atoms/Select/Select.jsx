import React from 'react'
import { map } from 'ramda'
import SelectWrapper from './styles'

const buildOption = ({ value, label, ...props }) => (
  <option key={value} value={value} {...props}>
    {label}
  </option>
)

const buildOptions = map(buildOption)

const Select = ({ options, ...props }) => {
  return <SelectWrapper {...props}>{buildOptions(options)}</SelectWrapper>
}

Select.defaultProps = {
  options: [],
}

export default Select
