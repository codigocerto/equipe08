import styled from 'styled-components'

import Typography from '../Typography'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Section = styled.section`
  padding: ${remCalc(140)} 0 ${remCalc(70)};

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    display: flex;
    padding: ${remCalc(203)} 0 0;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.black};
  margin: auto;
  height: ${remCalc(420)};

  @media (max-width: ${breakpoints.desktop}) {
    align-items: end;
    padding: ${remCalc(160)} ${remCalc(32)} ${remCalc(16)};
    height: auto;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${remCalc(1160)};
  width: 100%;
  padding: ${remCalc(60)} 0;

  span {
    display: inline-block;
    height: ${remCalc(28)};
    width: ${remCalc(8)};
    background-color: ${colors.red};
    margin-right:${remCalc(8)};

    @media (max-width: ${breakpoints.desktop}) {
      width: ${remCalc(2)};
      height: ${remCalc(18)};
      margin-right: ${remCalc(4)};
    }
  }

  img {
    position: absolute;
    height: ${remCalc(560)};
    top: ${remCalc(-74)};
    right: ${remCalc(13)};
    border-radius: ${remCalc(8)};

    @media (max-width: ${breakpoints.desktop}) {
      height: ${remCalc(340)};
      width: ${remCalc(243)};
      top: ${remCalc(12)};
      left: ${remCalc(32)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: static;
    padding: 0;
  }
`

export const Title = styled(Typography)`
  font-size: ${remCalc(40)};
  font-weight: 600;
  line-height: ${remCalc(80)};
  color: ${colors.white};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(24)};
    line-height: ${remCalc(29)};
  }
`

export const Text = styled(Typography)`
  font-size: ${remCalc(20)};
  font-weight: 400;
  line-height: ${remCalc(36)};
  color: ${colors.gray1};
  margin-top: ${remCalc(32)};
  max-width: ${remCalc(585)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(12)};
    line-height: ${remCalc(24)};
    margin-top: ${remCalc(12)};
    }
`