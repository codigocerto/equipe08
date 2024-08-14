import styled from "styled-components";
import { ButtonProps } from "./interface";
import { remCalc } from "../../utils/remCalc";

export const Button = styled.button<ButtonProps>`
  text-decoration: ${(props) => props.textdecoration};
  font-weight: ${(props) => props.fontweightbutton};
  box-shadow: ${(props) => props.boxshadowbutton};
  font-size: ${(props) => props.textbutton};
  color: ${(props) => props.textcolor};
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.borderbutton || "none"};
  padding: ${(props) => props.paddingbutton};
  width: ${(props) => props.widthbutton};

  &:hover {
    color: ${(props) => props.textcolorhover};
    background-color: ${(props) => props.hoverbgcolor};
  }
`;

export const Icon = styled.span`
  margin-left: ${remCalc(15)};
`;
