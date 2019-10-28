import React from 'react'
import { useRouter } from 'next/router'
import { addCollection } from 'data/collection'

import AddCollectionComponent from './AddCollectionComponent'

const AddCollectionContainer = () => {
  const router = useRouter()

  const onSubmit = async data => {
    addCollection(data)
      .run()
      .promise()

    alert('A coleção foi adicionada!!')

    router.push('/collection')
  }

  return <AddCollectionComponent onSubmit={onSubmit} />
}

export default AddCollectionContainer
