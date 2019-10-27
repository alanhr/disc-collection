import styled from 'styled-components'
import { margin, rem } from 'polished'

export const Aside = styled.aside`
  ${margin(0, rem(8), 0, 0)};
  flex: 1;
`
Aside.displayName = 'Aside'

export const Article = styled.article`
  ${margin(0, 0, 0, rem(8))};
  flex: 3;
`
Article.displayName = 'Article'
