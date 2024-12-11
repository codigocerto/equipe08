import styled from "styled-components";

import Typography from "../../components/Typography";

import { colors, breakpoints } from "../../styles";
import { remCalc } from "../../utils/remCalc";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  @media (max-width: ${breakpoints.desktop}) {
    align-items: end;
    height: auto;
  }
`;

export const TitleDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${remCalc(32)} 0 ${remCalc(8)} ${remCalc(33)};

  @media (min-width: ${breakpoints.tablet}) {
    width: 90%;
  }

  @media (min-width: ${breakpoints.desktop}) {
    margin: ${remCalc(80)} auto;
    width: 80%;
  }
`;

export const Title = styled(Typography)`
  font-size: ${remCalc(64)};

  &::before {
    content: " ";
    display: inline-block;
    background-color: ${colors.red};
    width: ${remCalc(2)};
    height: ${remCalc(18)};
    margin-right: ${remCalc(8)};
  }

  @media (min-width: ${breakpoints.mobile}) {
    font-size: ${remCalc(24)};
  }

  @media (min-width: ${breakpoints.desktop}) {
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
`;

export const CarrouselContainer = styled.div`
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: none;

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 80%;
    margin: 0 auto;
  }
`;
