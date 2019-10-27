import React from 'react'
import { Form, Field } from 'react-final-form'
import Validator from 'validatorjs'

import FieldGroup from 'molecules/FieldGroup'

import { ButtonsWrapper } from './styles'

const getError = meta => (meta.error && meta.touched ? meta.error : [])

const FormFields = ({ submitting, pristine, handleSubmit, form }) => (
  <form onSubmit={handleSubmit}>
    <Field name="name" type="text">
      {({ input, meta }) => <FieldGroup title="Nome" {...input} errors={getError(meta)} />}
    </Field>
    <Field name="description" type="textarea">
      {({ input, meta }) => <FieldGroup rows="10" title="Descrição" {...input} errors={getError(meta)} />}
    </Field>
    <ButtonsWrapper>
      <button type="submit" disabled={submitting || pristine}>
        Submit
      </button>
      <button type="button" onClick={form.reset} disabled={submitting || pristine}>
        Reset
      </button>
    </ButtonsWrapper>
  </form>
)

const rules = {
  name: ['required', 'max:50'],
  description: ['max:100'],
}

const validate = data => {
  const validation = new Validator(data, rules)
  if (validation.fails()) {
    return validation.errors.all()
  }

  return {}
}

const CollectionForm = ({ onSubmit, initialValues }) => {
  return (
    <Form
      validateOnBlur={false}
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      render={FormFields}
    />
  )
}

CollectionForm.defaultProps = {
  onSubmit: () => {},
  initialValues: null,
}

export default CollectionForm
