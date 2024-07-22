import styled from "styled-components";
import { colors, breakpoints } from "../../styles";

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
  margin: 12px auto 33px auto;

  h1 {
    font-size: 64px;

    &::before {
      content: " ";
      display: inline-block;
      background-color: ${colors.red};
      width: 2px;
      height: 18px;
      margin-right: 8px;
    }
  }

  @media (min-width: ${breakpoints.mobile}) {
    h1 {
      font-size: 24px;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: 80px auto;
    width: 80%;

    h1 {
      font-size: 64px;

      &::before {
        content: " ";
        display: inline-block;
        background-color: ${colors.red};
        width: 8px;
        height: 47px;
        margin-right: 8px;
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
