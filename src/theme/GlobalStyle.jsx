import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export default createGlobalStyle`
  ${normalize()};

  body{
    font-family: 'Poppins', sans-serif;
  }

  #__next {
    display: flex;
    flex-flow: row wrap;

    & > * {
      flex: 1 100%;
    }
  }
`
