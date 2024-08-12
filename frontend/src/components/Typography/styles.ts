import { HeadingProps, ParagraphProps, SpanProps } from "./interface"

import styled, { css } from "styled-components"

import { theme } from './theme'

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
    as: `h${ level }`
  }))<HeadingProps>`
    ${({ color = 'black', size = 'medium', fontWeight = 700, lineHeight = 1.5, fontFamily = '"Inter", sans-serif' }) => css`
      font-size: ${theme.sizes[size]};
      color: ${theme.colors[color]};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      font-family: ${fontFamily};
    `}
  `

export const Paragraph = styled('p')<ParagraphProps>`
    ${({ color = 'black', size = 'medium', fontWeight = 400, lineHeight = 1.5, fontFamily = '"Inter", sans-serif' }) => css`
      font-size: ${theme.sizes[size]};
      color: ${theme.colors[color]};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      font-family: ${fontFamily};
    `}
  `

export const Span = styled('span')<SpanProps>`
    ${({ color = 'black', size = 'medium', fontWeight = 400, lineHeight = 1.5, fontFamily = '"Inter", sans-serif' }) => css`
      font-size: ${theme.sizes[size]};
      color: ${theme.colors[color]};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      font-family: ${fontFamily};
    `}
  `