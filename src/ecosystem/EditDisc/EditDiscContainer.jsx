import React from 'react'
import { useRouter } from 'next/router'
import { pick } from 'ramda'

import { updateDisc, getDiscById } from 'data/disc'

import EditDiscComponent from './EditDiscComponent'

const EditdiscContainer = ({ disc }) => {
  const router = useRouter()

  const onSubmit = async data => {
    await updateDisc(disc.id, pick(['collectionId', 'name', 'singer'], data))
      .run()
      .promise()

    alert('A disco foi editado !!')

    router.push('/disc', '/')
  }

  return <EditDiscComponent onSubmit={onSubmit} disc={disc} />
}
EditdiscContainer.getInitialProps = async ({ query }) => {
  const { id } = query
  const { data } = await getDiscById(id)
    .run()
    .promise()

  return { disc: data }
}

export default EditdiscContainer
