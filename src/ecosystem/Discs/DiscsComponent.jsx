import React from 'react'

import DefaultTemplate from 'templates/Default'
import Header from 'organisms/Header'
import DiscTable from 'organisms/DiscTable'
import DiscSubMenu from 'organisms/DiscSubMenu'

const Content = ({ discs, onDelete }) => (
  <>
    <h1>Discos</h1>
    <DiscTable discs={discs} onDelete={onDelete} />
  </>
)

const DiscsComponent = ({ discs, onDelete }) => {
  return (
    <DefaultTemplate
      header={<Header />}
      subMenu={<DiscSubMenu />}
      content={<Content discs={discs} onDelete={onDelete} />}
    />
  )
}

export default DiscsComponent
