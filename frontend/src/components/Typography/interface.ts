import { theme } from "./theme"

export type HeadingProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: string | number
    lineHeight?: string | number
    fontFamily?: string
    level: 1 | 2 | 3 | 4 | 5 | 6
  }

export type ParagraphProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: string | number
    lineHeight?: string | number
    fontFamily?: string
  }

export type SpanProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: string | number
    lineHeight?: string | number
    fontFamily?: string
  }


