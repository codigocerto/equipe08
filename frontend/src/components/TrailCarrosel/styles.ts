import styled from "styled-components"

import Typography from "../Typography"

import { remCalc } from "../../utils/remCalc"
import { colors, breakpoints } from "../../styles"


export const Main = styled.section`
  @media (min-width: ${breakpoints.mobile}) {
    margin-left: ${remCalc(30)};
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${remCalc(1160)};
    margin: 0 auto;
  }
`

export const MainTitle = styled(Typography)`
  @media (min-width: ${breakpoints.mobile}) {
    font-size: ${remCalc(24)};
    margin-top: ${remCalc(12)};
    margin-bottom: ${remCalc(10)};
  
    &::before {
      content: "";
      background-color: ${colors.red};
      width: ${remCalc(2)};
      height: ${remCalc(18)};
      display: inline-block;
      text-align: center;
      /* margin-left: ${remCalc(33)}; */
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(40)};
    font-weight: 600;
    margin-top: ${remCalc(80)};
    margin-bottom: ${remCalc(32)};

    &::before {
      height: ${remCalc(28)};
      width: ${remCalc(8)};
      /* margin-left: ${remCalc(220)}; */
      margin-right: ${remCalc(8)};
      margin-left: 0;
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${remCalc(20)} ${remCalc(20)} 0 0;

  > div {
    img {
      width: 100%;
      height: ${remCalc(370)};
      object-fit: cover;
      border-radius: ${remCalc(8)};
      cursor: grab;
    }
  }
`

export const ContentTitle = styled(Typography)`
  margin: ${remCalc(16)} ${remCalc(10)};
  padding-bottom: ${remCalc(20)};

  &::before {
    content: "";
    background-color: ${colors.red};
    width: ${remCalc(12)};
    height: ${remCalc(8)};
    display: inline-block;
    text-align: center;
    transform: translate(0%, -50%);
    margin-right: ${remCalc(8)};
  }
`
