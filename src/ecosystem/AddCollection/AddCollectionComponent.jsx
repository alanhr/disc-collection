import React from 'react'

import Header from 'organisms/Header'
import DefaultTemplate from 'templates/Default'
import SubMenu from 'molecules/SubMenu'

const Content = () => 'gg-add'

const AddCollectionComponent = () => {
  const subMenu = (
    <SubMenu
      links={[
        { href: '/collections', text: 'Listar todos os coleçoes' },
        { href: '/add-collection', text: 'Adicionar uma nova coleção' },
      ]}
    />
  )
  return <DefaultTemplate header={<Header />} subMenu={subMenu} ontent={<Content />} />
}

export default AddCollectionComponent
