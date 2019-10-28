import React from 'react'

import DefaultTemplate from 'templates/Default'
import Header from 'organisms/Header'
import DiscTable from 'organisms/DiscTable'
import DiscSubMenu from 'organisms/DiscSubMenu'
import SearchForm from 'organisms/SearchForm'

const Content = ({ discs, onDelete, onSearch }) => (
  <>
    <h1>Discos</h1>
    <SearchForm onSubmit={onSearch} />
    <DiscTable discs={discs} onDelete={onDelete} />
  </>
)

const DiscsComponent = ({ discs, onDelete, onSearch }) => {
  return (
    <DefaultTemplate
      header={<Header />}
      subMenu={<DiscSubMenu />}
      content={<Content discs={discs} onDelete={onDelete} onSearch={onSearch} />}
    />
  )
}

export default DiscsComponent
