import React from 'react'
import { compose, reduce, prop, append } from 'ramda'

import { getCollections } from 'data/collection'

import DiscFormComponent from './DiscFormComponent'

const buildOptions = compose(
  reduce((acc, { name, id }) => append({ label: name, value: id }, acc), [
    { label: 'Selecione uma coleção', value: 'select' },
  ]),
  prop('data'),
)

const DiscForm = props => {
  const [collectionOptions, setCollectionOptions] = React.useState([])

  React.useEffect(() => {
    getCollections()
      .run()
      .future()
      .map(buildOptions)
      .map(setCollectionOptions)
  }, [])

  return <DiscFormComponent {...props} collectionOptions={collectionOptions} />
}

export default DiscForm
