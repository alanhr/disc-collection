import React from 'react'

import DefaultTemplate from 'templates/Default'
import Header from 'organisms/Header'
import DiscSubMenu from 'organisms/DiscSubMenu'
import DiscForm from 'organisms/DiscForm'

const Content = ({ onSubmit }) => (
  <>
    <h1>Adicionar um Disco</h1>
    <DiscForm onSubmit={onSubmit} />
  </>
)

const DiscsComponent = ({ onSubmit }) => {
  return <DefaultTemplate header={<Header />} subMenu={<DiscSubMenu />} content={<Content onSubmit={onSubmit} />} />
}

export default DiscsComponent
