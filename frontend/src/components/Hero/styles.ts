import styled from 'styled-components'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

import hero from '../../assets/images/hero.png'

export const Hero = styled.div`
  background-image: url(${hero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 255px 0;

  h1, h2 {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 682px;
  }
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 77.45px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 32px;
    line-height: 38.73px;
    text-align: center;
    margin: 0 14px 16px;

    span {
      display: block;
    }
  }
`

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 20.05px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 12px;
    line-height: 14.52px;
    text-align: center;
    margin: 0 4px 60px;
  }
`