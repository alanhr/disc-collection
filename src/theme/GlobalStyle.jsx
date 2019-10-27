import { createGlobalStyle } from 'styled-components'
import { normalize, rem } from 'polished'

export default createGlobalStyle`
  ${normalize()};

  body{
    font-family: 'Poppins', sans-serif;
    font-size: ${rem(16)};
  }

  #__next {
    display: flex;
    flex-flow: row wrap;

    & > * {
      flex: 1 100%;
    }
  }
`
