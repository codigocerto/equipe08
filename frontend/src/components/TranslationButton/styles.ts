import styled from "styled-components";

import { colors, breakpoints } from "../../styles";
import { remCalc } from "../../utils/remCalc";
import { SwitchButtonProps } from "./interface";

export const SwitchContainer = styled.div`
  position: relative;
`;

export const SwitchButton = styled.button<SwitchButtonProps>`
  position: fixed;
  bottom: ${remCalc(80)};
  right: ${remCalc(15)};
  width: ${remCalc(48)};
  height: ${remCalc(48)};
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ menuOpen }) => (menuOpen ? colors.red : 'rgba(0, 0, 0, 0.4)')};
  color: white;
  font-size: ${remCalc(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.4s ease-in-out;

  &:hover {
      background-color: ${colors.red};
  }

  @media (max-width: ${breakpoints.desktop}) {
    bottom: ${remCalc(70)};
    right: ${remCalc(18)};
    width: ${remCalc(30)};
    height: ${remCalc(30)};
    font-size: ${remCalc(18)};
  }
`;

export const LanguageMenu = styled.div`
  position: fixed;
  bottom: ${remCalc(132)};
  right: ${remCalc(15)};
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: ${remCalc(8)};
  padding: ${remCalc(10)};
  display: flex;
  flex-direction: column;
  width: ${remCalc(134)};
  z-index: 2;
  
  @media (max-width: ${breakpoints.desktop}) {
    bottom: ${remCalc(102)};
    right: ${remCalc(18)};
  }
`;

export const LanguageOption = styled.button`
  background: none;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  padding: ${remCalc(8)};
  cursor: pointer;
  border-radius: ${remCalc(5)};

  &:hover {
    background-color: ${colors.red};
    transition: all 0.5s ease;
  }
`;

export const FlagIcon = styled.img`
  width: ${remCalc(20)};
  margin-right: ${remCalc(8)};
`;