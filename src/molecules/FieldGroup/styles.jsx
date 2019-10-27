import styled from 'styled-components'
import { rem, margin } from 'polished'

export const FieldGroupWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  line-height: ${rem(2)};
  ${margin(rem(4))};

  & > label {
    ${margin(0, rem(8), 0, 0)};
  }

  & > input,
  & > select,
  & > textarea {
    flex: 1;
  }
`
FieldGroupWrapper.displayName = 'FieldGroupWrapper'

export const FieldError = styled.span`
  color: red;
  align-self: center;
  ${margin(0, 0, 0, rem(4))}
`
