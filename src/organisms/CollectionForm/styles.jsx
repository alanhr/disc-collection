import styled from 'styled-components'
import { margin, rem } from 'polished'

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  ${margin(rem(8), 0, 0, 0)};

  button {
    ${margin(0, rem(8))};
  }
`
