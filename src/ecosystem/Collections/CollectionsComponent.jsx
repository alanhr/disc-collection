import React from 'react'

import DefaultTemplate from 'templates/Default'
import Header from 'organisms/Header'
import CollectionTable from 'organisms/CollectionTable'
import SubMenu from 'molecules/SubMenu'

const Content = ({ collections }) => (
  <>
    <h1>Coleções</h1>
    <CollectionTable collections={collections} />
  </>
)

const CollectionsComponent = ({ collections }) => {
  const subMenu = (
    <SubMenu
      links={[
        { href: '/collections', text: 'Listar todos os coleçoes' },
        { href: '/add-collection', text: 'Adicionar uma nova coleção' },
      ]}
    />
  )
  return <DefaultTemplate header={<Header />} subMenu={subMenu} content={<Content collections={collections} />} />
}

export default CollectionsComponent
