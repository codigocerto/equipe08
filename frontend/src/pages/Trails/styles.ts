import styled from "styled-components";
import { colors, breakpoints } from "../../styles";
import { remCalc } from "../../utils/remCalc";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${remCalc(12)} auto ${remCalc(33)} auto;
  h1 {
    font-size: ${remCalc(64)};

    &::before {
      content: " ";
      display: inline-block;
      background-color: ${colors.red};
      width: ${remCalc(2)};
      height: ${remCalc(18)};
      margin-right: ${remCalc(8)};
    }
  }

  @media (min-width: ${breakpoints.mobile}) {
    width: 90%;
    margin: 0 auto;
    h1 {
      font-size: ${remCalc(24)};
      margin-top: ${remCalc(12)};
      margin-bottom: ${remCalc(12)};
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: ${remCalc(80)} auto;
    width: 80%;

    h1 {
      font-size: ${remCalc(64)};

      &::before {
        content: " ";
        display: inline-block;
        background-color: ${colors.red};
        width: ${remCalc(8)};
        height: ${remCalc(47)};
        margin-right: ${remCalc(8)};
      }
    }
  }
`;

export const CardContainer = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    /* width delimita o tamanho dos cards e o margin centraliza */
    width: 80%;
    margin: 0 auto;
  }
`;
