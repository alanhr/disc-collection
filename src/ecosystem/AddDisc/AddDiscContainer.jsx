import React from 'react'
import { useRouter } from 'next/router'
import { addDisc } from 'data/disc'

import AddDiscComponent from './AddDiscComponent'

const AddDiscContainer = () => {
  const router = useRouter()

  const onSubmit = async data => {
    addDisc(data)
      .run()
      .promise()

    alert('O disco foi adicionado !!')

    router.push('/disc', '/')
  }

  return <AddDiscComponent onSubmit={onSubmit} />
}

export default AddDiscContainer
