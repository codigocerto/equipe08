import { createGlobalStyle } from 'styled-components'

export const colors = {
  red1: '#E53939',
  red2: '#771111',
  white: '#FFF',
  black: '#000',
  gray1: '#CCCCCC',
  gray2: '#6A6A6A',
  gray3: '#2D2D2D'
}

export const breakpoints = {
  desktop: '1024px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
`