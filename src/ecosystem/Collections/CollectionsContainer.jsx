import React from 'react'

import { getCollections } from 'data/collection'

import CollectionComponent from './CollectionsComponent'

const CollectionsContainer = ({ collections }) => {
  return <CollectionComponent collections={collections} />
}

CollectionsContainer.propTypes = {}

CollectionsContainer.getInitialProps = async () => {
  const { data } = await getCollections()
    .run()
    .promise()

  return { collections: data }
}

export default CollectionsContainer
