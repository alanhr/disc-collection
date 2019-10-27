import React from 'react'

import Container from 'atoms/Container'

import { Aside, Article } from './styles'

const Default = ({ header, subMenu, content }) => {
  return (
    <>
      {header}
      <main>
        <Container>
          <Aside>{subMenu}</Aside>
          <Article>{content}</Article>
        </Container>
      </main>
    </>
  )
}

export default Default
