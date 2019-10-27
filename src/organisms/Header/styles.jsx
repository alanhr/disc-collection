import styled from 'styled-components'
import { padding, rem } from 'polished'

import Link from 'atoms/Link'

export const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  width: 100%;

  ${Link} {
    ${padding(rem(16))};
  }
`
