import React from 'react'
import PropTypes from 'prop-types'
import { cond, T, equals, always, join } from 'ramda'

import Label from 'atoms/Label'
import Select from 'atoms/Select'
import Input from 'atoms/Input'
import Textarea from 'atoms/Textarea'

import { FieldGroupWrapper, FieldError } from './styles'

const getInputByType = cond([
  [equals('select'), always(Select)],
  [equals('textarea'), always(Textarea)],
  [T, always(Input)],
])

const FieldGroup = ({ type, title, errors, ...props }) => {
  const Field = getInputByType(type)

  const errs = join(' ', errors)

  return (
    <FieldGroupWrapper>
      <Label>{title}</Label>
      <Field {...props} />
      <FieldError>{errs}</FieldError>
    </FieldGroupWrapper>
  )
}

FieldGroup.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.any,
    }),
  ),
  errors: PropTypes.arrayOf(PropTypes.string),
}

FieldGroup.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  options: [],
  value: null,
  errors: [],
}

export default React.memo(FieldGroup)
