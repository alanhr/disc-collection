import React from 'react'

import DefaultTemplate from 'templates/Default'
import Header from 'organisms/Header'
import DiscSubMenu from 'organisms/DiscSubMenu'
import DiscForm from 'organisms/DiscForm'

const Content = ({ onSubmit, disc }) => (
  <>
    <h1>Editar o Disco</h1>
    <DiscForm onSubmit={onSubmit} initialValues={disc} />
  </>
)

const DiscsComponent = ({ onSubmit, disc }) => {
  return (
    <DefaultTemplate
      header={<Header />}
      subMenu={<DiscSubMenu />}
      content={<Content onSubmit={onSubmit} disc={disc} />}
    />
  )
}

export default DiscsComponent
