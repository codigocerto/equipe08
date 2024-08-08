import { theme } from "./theme"

export type HeadingProps = {
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.sizes
    fontWeight?: 100 | 400 | 700
    lineHeight?: string | number
    level: 1 | 2 | 3 | 4 | 5 | 6
  }


