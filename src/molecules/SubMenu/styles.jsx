import styled from 'styled-components'
import { border, rem, borderRadius, padding } from 'polished'

import Link from 'atoms/Link'

export const SubMenuWrapper = styled.nav`
  ${border(rem(1), 'solid', 'black')};
  ${borderRadius('top', rem(4))};
  ${borderRadius('bottom', rem(4))};

  display: flex;
  flex-flow: column nowrap;

  ${Link} {
    ${padding(rem(8))};
  }
`
SubMenuWrapper.displayName = 'SubMenuWrapper'

export default SubMenuWrapper
