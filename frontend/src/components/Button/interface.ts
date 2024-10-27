import { ButtonHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export type ButtonProps = {
  fontweightbutton?: string;
  textbutton?: string;
  textcolor?: string;
  textcolorhover?: string;
  textdecoration?: string;
  bgcolor?: string;
  hoverbgcolor?: string;
  boxshadowbutton?: string;
  borderbutton?: string;
  paddingbutton?: string;
  widthbutton?: string;
  isblock?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
} & SelectHTMLAttributes<HTMLDivElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;