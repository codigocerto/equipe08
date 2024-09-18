import styled from 'styled-components'

import Link from '../Link'
import Typography from '../Typography'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: ${remCalc(70)} ${remCalc(170)} 0 ${remCalc(170)};

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${remCalc(25)} ${remCalc(40)} 0 ${remCalc(40)};
    }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${remCalc(25)} ${remCalc(10)} 0 ${remCalc(10)};
    }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${remCalc(1160)};
  width: 100%;
  margin: 0 auto;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${remCalc(125)};
  padding: 0 ${remCalc(8)};
  border-top: ${remCalc(2)} solid ${colors.gray3};
  border-bottom: ${remCalc(2)} solid ${colors.gray3};

  img {
    height:  ${remCalc(72)};
    width: ${remCalc(100)};

    @media (max-width: ${breakpoints.tablet}) {
      height: ${remCalc(50)};
      width: ${remCalc(70)};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: ${remCalc(80)};
    }
`

export const FooterLink = styled(Link)`
  color: ${colors.gray2};
  transition: color .5s ease-out;

  &:hover {
    color: ${colors.red};
  }
`

export const SocialMedia = styled.ul`
  display: flex;
  gap: ${remCalc(50)};

  i {
    color: ${colors.gray2};
    font-size: ${remCalc(50)};
    transition: color .5s ease-out;

    &:hover {
      color: ${colors.red};
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: ${remCalc(35)};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
      gap: ${remCalc(20)};
    }

  @media (max-width: ${breakpoints.mobile}) {
      gap: ${remCalc(12)};
    }
`

export const Copyright = styled(Typography)`
  color: ${colors.gray2};
  font-weight: 400;
  font-size: ${remCalc(14)};
  line-height: ${remCalc(19.36)};
  padding: ${remCalc(28)} 0;

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${remCalc(12)} 0;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${remCalc(10)};
  }
`