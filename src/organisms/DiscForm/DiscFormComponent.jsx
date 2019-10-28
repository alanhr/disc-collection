import React from 'react'
import { Form, Field } from 'react-final-form'
import Validator from 'validatorjs'

import FieldGroup from 'molecules/FieldGroup'

import { ButtonsWrapper } from './styles'

const getError = meta => (meta.error && meta.touched ? meta.error : [])

const FormFields = ({ submitting, pristine, handleSubmit, form, collectionOptions }) => (
  <form onSubmit={handleSubmit}>
    <Field name="name" type="text">
      {({ input, meta }) => <FieldGroup title="Nome" {...input} errors={getError(meta)} />}
    </Field>
    <Field name="singer" type="text">
      {({ input, meta }) => <FieldGroup title="Cantor(a)" {...input} errors={getError(meta)} />}
    </Field>
    <Field name="collectionId" type="select">
      {({ input, meta }) => (
        <FieldGroup options={collectionOptions} title="Coleção" {...input} errors={getError(meta)} />
      )}
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
  singer: ['required', 'max:30'],
  collectionId: ['required', 'not_in:select'],
}

const validate = data => {
  const validation = new Validator(data, rules)
  if (validation.fails()) {
    return validation.errors.all()
  }

  return {}
}

const DiscFormComponent = ({ onSubmit, initialValues, collectionOptions }) => {
  return (
    <Form validateOnBlur={false} onSubmit={onSubmit} initialValues={initialValues} validate={validate}>
      {props => <FormFields {...props} collectionOptions={collectionOptions} />}
    </Form>
  )
}

DiscFormComponent.defaultProps = {
  onSubmit: () => {},
  initialValues: null,
}

export default DiscFormComponent
