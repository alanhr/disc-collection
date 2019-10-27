import styled from 'styled-components'
import { margin } from 'polished'

const Container = styled.div`
  ${margin('auto')}
  max-width: 1024px;
  display: flex;
  width: 100%;
`
Container.displayName = 'Container'

export default Container
