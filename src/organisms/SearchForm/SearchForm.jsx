import React from 'react'
import { Form, Field } from 'react-final-form'

import FieldGroup from 'molecules/FieldGroup'

const getError = meta => (meta.error && meta.touched ? meta.error : [])

const FormFields = ({ submitting, handleSubmit, form }) => (
  <form onSubmit={handleSubmit}>
    <Field name="search" type="text">
      {({ input, meta }) => <FieldGroup title="Pesquisar" {...input} errors={getError(meta)} />}
    </Field>
    <button type="submit" disabled={submitting}>
      submite
    </button>
  </form>
)

const SearchForm = ({ onSubmit, initialValues }) => {
  return <Form validateOnBlur={false} onSubmit={onSubmit} initialValues={initialValues} render={FormFields} />
}

SearchForm.defaultProps = {
  onSubmit: () => {},
}

export default SearchForm
