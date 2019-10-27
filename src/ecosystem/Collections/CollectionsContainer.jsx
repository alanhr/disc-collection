import React from 'react'
import PropTypes from 'prop-types'

import { getCollections } from 'data/collection'

import CollectionComponent from './CollectionsComponent'

const CollectionsContainer = ({ collections }) => {
  return <CollectionComponent collections={collections} />
}

CollectionsContainer.propTypes = {}

CollectionsContainer.getInitialProps = async () => {
  const collections = await getCollections()
    .run()
    .promise()

  return { collections }
}

export default CollectionsContainer
