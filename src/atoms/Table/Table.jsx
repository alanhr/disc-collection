import styled, { css } from 'styled-components'
import { padding, rem } from 'polished'

const rowsDefaultStyle = css`
  ${padding(rem(8))};
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  text-align: center;
`

export const Th = styled.th`
  ${rowsDefaultStyle};
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
`

export const Td = styled.td`
  ${rowsDefaultStyle};
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
`

export const Table = styled.table`
  width: 100%;
  color: black;
  border-collapse: collapse;
`
