import { ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textdecoration?: string;
  fontweightbutton?: string;
  boxshadowbutton?: string;
  textbutton?: string;
  textcolor?: string;
  bgcolor?: string;
  borderbutton?: string;
  paddingbutton?: string;
  widthbutton?: string;

  textcolorhover?: string;
  hoverbgcolor?: string;
  onClick?: () => void;
  icon?: ReactNode;
}
