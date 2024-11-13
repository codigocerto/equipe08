import { ComponentProps, ElementType, ReactNode } from "react";

export interface TypographyProps extends ComponentProps<'p'>, Record<string, unknown> {
  children?: ReactNode;
  size?: string;
  color?: string;
  fontweight?: string;
  textdecoration?: string;
  as?: ElementType;
}


