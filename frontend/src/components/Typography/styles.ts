import { TypographyProps } from "./interface";
import styled from "styled-components";

export const Text = styled.p<TypographyProps>`
  ${({ size }) => size && `font-size: ${size};`}
  color: ${({ color }) => color || "#333"};
  font-family: Poppins, Helvetica, "sans-serif"
  ${({ fontweight }) => fontweight && `font-weight: ${fontweight};`}
  ${({ textdecoration }) => textdecoration && `text-decoration: ${textdecoration};`} 
`;