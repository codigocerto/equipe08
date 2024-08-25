import { createGlobalStyle } from "styled-components"

import { remCalc } from "./utils/remCalc"

export const colors = {
  red: "#E53939",
  white: "#FFF",
  black: "#000",
  black2: "#1B1D20",
  black3: "#282A2D",
  gray1: "#CCCCCC",
  gray2: "#6A6A6A",
  gray3: "#2D2D2D",
  gray4: "#333232",
}

export const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
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

  html {
    scroll-padding-top: ${remCalc(126)};
    scroll-behavior: smooth;

    @media (max-width: ${breakpoints.desktop}) {
      scroll-padding-top: ${remCalc(88)};
    }
  }
`
