import styled from 'styled-components'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

import hero from '../../assets/images/hero.png'

export const Hero = styled.div`
  background-image: url(${hero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${remCalc(200)} 0 ${remCalc(220)};

  h1, h2 {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.desktop}) {
    
    padding: ${remCalc(224)} 0 ${remCalc(280)};
  }
`

export const Title = styled.h1`
  font-size: ${remCalc(48)};
  font-weight: 600;
  line-height: ${remCalc(72)};
  margin-bottom: ${remCalc(16)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(32)};
    line-height: ${remCalc(40)};
    text-align: center;
    margin: 0 ${remCalc(14)} ${remCalc(16)};

    span {
      display: block;
    }
  }
`

export const SubTitle = styled.h2`
  font-size: ${remCalc(22)};
  font-weight: 400;
  line-height: ${remCalc(24)};
  margin-bottom: ${remCalc(32)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(12)};
    line-height: ${remCalc(16)};
    text-align: center;
    margin: 0 ${remCalc(4)} ${remCalc(56)};
  }
`