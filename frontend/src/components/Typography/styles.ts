import { HeadingProps } from "./interface"

import styled, { css } from "styled-components"

import { theme } from './theme'

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
    as: `h${ level }`
  }))<HeadingProps>`
    ${({ color = 'white', size = 'medium', fontWeight = 700, lineHeight = 1.5 }) => css`
      font-size: ${theme.sizes[size]};
      color: ${theme.colors[color]};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
    `}
  `