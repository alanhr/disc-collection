import React from 'react'

import Header from 'organisms/Header'
import CollectionForm from 'organisms/CollectionForm'
import DefaultTemplate from 'templates/Default'
import CollectionSubMenu from 'organisms/CollectionSubMenu'

const Content = ({ onSubmit, collection }) => (
  <>
    <h1>Editar a Coleção</h1>
    <CollectionForm onSubmit={onSubmit} initialValues={collection} />
  </>
)

const EditCollectionComponent = ({ onSubmit, collection }) => {
  return (
    <DefaultTemplate
      header={<Header />}
      subMenu={<CollectionSubMenu />}
      content={<Content onSubmit={onSubmit} collection={collection} />}
    />
  )
}

export default EditCollectionComponent
