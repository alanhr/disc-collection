import React from 'react'
import NextLink from 'next/link'

import Container from 'atoms/Container'
import Link from 'atoms/Link'

import { HeaderWrapper, Nav } from './styles'

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <NextLink href="/disc" as="/">
            <Link>Discos</Link>
          </NextLink>
          <NextLink href="/collection">
            <Link>Coleções</Link>
          </NextLink>
        </Nav>
      </Container>
    </HeaderWrapper>
  )
}

export default React.memo(Header)
