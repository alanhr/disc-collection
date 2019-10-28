import React from 'react'

import SubMenu from 'molecules/SubMenu'

const DiscSubMenu = () => (
  <SubMenu
    links={[
      { href: '/disc', as: '/', text: 'Listar todos os discos' },
      { href: '/disc/add', text: 'Adicionar um novo disco' },
    ]}
  />
)

export default React.memo(DiscSubMenu)
