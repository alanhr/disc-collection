import React from 'react'

import DefaultTemplate from 'templates/Default'
import Header from 'organisms/Header'
import CollectionTable from 'organisms/CollectionTable'
import CollectionSubMenu from 'organisms/CollectionSubMenu'

const Content = ({ collections }) => (
  <>
    <h1>Coleções</h1>
    <CollectionTable collections={collections} />
  </>
)

const CollectionsComponent = ({ collections }) => {
  return (
    <DefaultTemplate
      header={<Header />}
      subMenu={<CollectionSubMenu />}
      content={<Content collections={collections} />}
    />
  )
}

export default CollectionsComponent
