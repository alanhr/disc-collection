import React from 'react'

import { getDiscs, deleteDisc } from 'data/disc'

import DiscsComponent from './DiscsComponent'

const DiscsContainer = ({ discs }) => {
  const [discsState, setDiscs] = React.useState(discs)

  const onDelete = async id => {
    const confirmResponse = window.confirm('Você deseja deletar o disco ?')

    if (confirmResponse) {
      await deleteDisc(id)
        .run()
        .promise()

      const { data } = await getDiscs()
        .run()
        .promise()

      setDiscs(data)
    }
  }

  const onSearch = async ({ search }) => {
    const { data } = await getDiscs(search)
      .run()
      .promise()

    setDiscs(data)
  }

  return <DiscsComponent discs={discsState} onDelete={onDelete} onSearch={onSearch} />
}

DiscsContainer.getInitialProps = async () => {
  const { data } = await getDiscs()
    .run()
    .promise()

  return { discs: data }
}

export default DiscsContainer
