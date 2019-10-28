import React from 'react'
import { pick } from 'ramda'
import { useRouter } from 'next/router'

import { getCollectionById, updateCollection } from 'data/collection'

import EditCollectionComponent from './EditCollectionComponent'

const EditCollectionContainer = ({ collection }) => {
  const router = useRouter()

  const onSubmit = async data => {
    updateCollection(collection.id, pick(['name', 'description'], data))
      .run()
      .promise()

    alert('A coleção foi editada!!')

    router.push('/collection')
  }

  return <EditCollectionComponent onSubmit={onSubmit} collection={collection} />
}

EditCollectionContainer.getInitialProps = async ({ query }) => {
  const { id } = query
  const { data } = await getCollectionById(id)
    .run()
    .promise()

  return { collection: data }
}

export default EditCollectionContainer
