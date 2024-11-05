import styled from "styled-components";

import { colors, breakpoints } from "../../styles";
import { remCalc } from "../../utils/remCalc";

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;
`;

export const SwitchLabel = styled.span`
  background-color: ${colors.gray1};
  border-radius: ${remCalc(5)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${remCalc(90)};
  height: ${remCalc(34)};
  padding: ${remCalc(20)} ${remCalc(12)};
  position: relative;
  transition: background-color 0.3s ease;

  @media (min-width: ${breakpoints.tablet}) {
    width: ${remCalc(130)};
  }

  &:before {
    content: '';
    position: absolute;
    width: ${remCalc(35)};
    height: ${remCalc(25)};
    border-radius: ${remCalc(5)};
    top: ${remCalc(7.4)};
    left: ${remCalc(7)};
    background-color: ${colors.white};
    transition: transform 0.3s ease;

    @media (min-width: ${breakpoints.tablet}) {
        width: ${remCalc(40)};
        height: ${remCalc(30)};
        top: ${remCalc(5)};
    }
  }

  input:checked + &:before {
    transform: translateX(${remCalc(41)});

    @media (min-width: ${breakpoints.tablet}) {
        transform: translateX(${remCalc(76)});
    }
  }

`;

export const Flag = styled.img`
  width: ${remCalc(25)};
  z-index: 1;

  @media (min-width: ${breakpoints.tablet}) {
    width: ${remCalc(30)};
    }
`;