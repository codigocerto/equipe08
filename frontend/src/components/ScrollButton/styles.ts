import styled from "styled-components"

import { remCalc } from "../../utils/remCalc"

import { colors } from "../../styles"
import { breakpoints } from "../../styles"

import { ScrollButtonProps } from "./interface"

export const ScrollButton = styled.button<ScrollButtonProps>`
  i {
    position: fixed;
    bottom: ${remCalc(20)};
    right: ${remCalc(20)};
    background-color: rgba(0, 0, 0, 0.4);
    color: ${colors.white};
    font-size: ${remCalc(24)};
    cursor: pointer;
    padding: ${remCalc(8)};
    border-radius: ${remCalc(5)};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    transition: opacity 0.2s ease;
    pointer-events: ${({ $isVisible }) => ($isVisible ? "all" : "none")};
    z-index: 3;

    &:hover {
      background-color: ${colors.red};
      transition: all 0.5s ease;
    }

    @media (max-width: ${breakpoints.desktop}) {
      padding: ${remCalc(4)};
      font-size: ${remCalc(20)};
    }
  }
`
