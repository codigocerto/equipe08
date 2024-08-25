import styled from 'styled-components'

import { remCalc } from '../../utils/remCalc'

import { breakpoints } from '../../styles'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${remCalc(1160)};
  width: 100%;
  padding: ${remCalc(40)} 0 ${remCalc(100)};
  margin: 0 auto;

  h1 {
    font-size: ${remCalc(48)};
    font-weight: 600;
    line-height: ${remCalc(72)};

    @media (max-width: ${breakpoints.desktop}) {
      font-size: ${remCalc(40)};
      line-height: ${remCalc(42)};
      align-self: flex-start;
    }
  }

  span {
    display: block;
  }
  
  img {
    height: ${remCalc(128)};

    @media (max-width: ${breakpoints.desktop}) {
      height: ${remCalc(146)};
      margin-top: ${remCalc(32)};
      text-align: right;
      align-self: flex-end;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    padding: ${remCalc(32)};
  }
`