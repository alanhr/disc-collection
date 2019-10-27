import React from 'react'

import Header from 'organisms/Header'
import CollectionForm from 'organisms/CollectionForm'
import DefaultTemplate from 'templates/Default'
import CollectionSubMenu from 'organisms/CollectionSubMenu'

const Content = ({ onSubmit }) => (
  <>
    <h1>Adicionar uma Coleção</h1>
    <CollectionForm onSubmit={onSubmit} />
  </>
)

const AddCollectionComponent = ({ onSubmit }) => {
  return (
    <DefaultTemplate header={<Header />} subMenu={<CollectionSubMenu />} content={<Content onSubmit={onSubmit} />} />
  )
}

export default AddCollectionComponent
