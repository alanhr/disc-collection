import React from 'react'

import SubMenu from 'molecules/SubMenu'

const CollectionSubMenu = () => (
  <SubMenu
    links={[
      { href: '/collection', text: 'Listar todos os coleçoes' },
      { href: '/collection/add', text: 'Adicionar uma nova coleção' },
    ]}
  />
)

export default React.memo(CollectionSubMenu)
