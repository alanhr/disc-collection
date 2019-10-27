import styled from 'styled-components'
import { padding, border, borderRadius, rem } from 'polished'

const Input = styled.input`
  ${padding(rem(3), rem(5))};
  ${border(rem(1), 'solid', 'black')};
  ${borderRadius('top', rem(4))};
  ${borderRadius('bottom', rem(4))};
`

export default Input
