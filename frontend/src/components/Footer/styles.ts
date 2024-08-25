import styled from 'styled-components'

import Link from '../Link'
import Typography from '../Typography'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: ${remCalc(32)} 0 ${remCalc(16)};

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(16)} ${remCalc(32)} ${remCalc(12)};
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
  height: ${remCalc(224)};
  padding: ${remCalc(16)} 0;
  border-top: ${remCalc(2)} solid ${colors.gray3};
  border-bottom: ${remCalc(2)} solid ${colors.gray3};

  img {
    height:  ${remCalc(72)};
    width: ${remCalc(100)};

    @media (max-width: ${breakpoints.desktop}) {
      height:  ${remCalc(56)};
      width: ${remCalc(84)};
      margin-bottom: ${remCalc(16)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    flex-direction: column;
    padding: 0;
    border-top: none;
    border-bottom: none;
    height: auto;
  }
`

export const ContactColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${colors.gray2};
  margin-top: ${remCalc(22)};
  margin-left: ${remCalc(200)};

  h3 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: ${remCalc(20)};
    line-height: ${remCalc(32)};

    @media (max-width: ${breakpoints.desktop}) {
      font-size: ${remCalc(18)};
    }
  }

  li {
    font-weight: 400;
    font-size: ${remCalc(14)};
    line-height: ${remCalc(36)};

    @media (max-width: ${breakpoints.desktop}) {
      font-weight: 500;
      font-size: ${remCalc(12)};
      line-height: ${remCalc(32)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 0;
    margin-left: 0;
    padding: ${remCalc(8)} 0 ${remCalc(8)};
    border-top: ${remCalc(1)} solid ${colors.gray3};
    border-bottom: ${remCalc(1)} solid ${colors.gray3};
  }
`

export const ContactColumnTitle = styled(Typography)`
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${remCalc(20)};
  line-height: ${remCalc(32)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(18)};
  }
`

export const Email = styled(Typography)`
  font-weight: 400;
  font-size: ${remCalc(14)};
  line-height: ${remCalc(36)};

  @media (max-width: ${breakpoints.desktop}) {
    font-weight: 500;
    font-size: ${remCalc(12)};
    line-height: ${remCalc(32)};
  }
`

export const InfoColumn = styled(ContactColumn)`
  display: revert;

  h3 {
    margin-bottom: ${remCalc(30)};

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: ${remCalc(4)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    border-top: none;
    border-bottom: ${remCalc(1)} solid ${colors.gray3};
    padding-bottom: ${remCalc(8)};
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

  i {
    color: ${colors.gray2};
    font-size: ${remCalc(30)};
    margin-right: ${remCalc(32)};
    transition: color .5s ease-out;

    &:hover {
      color: ${colors.red};
    }

    @media (max-width: ${breakpoints.desktop}) {
      font-size: ${remCalc(24)};
      margin-right: ${remCalc(12)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 5%;
    right: ${remCalc(4)};
  }
`

export const Copyright = styled(Typography)`
  color: ${colors.gray2};
  font-weight: 400;
  font-size: ${remCalc(14)};
  line-height: ${remCalc(19.36)};
  margin-top: ${remCalc(16)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(10)};
    line-height: ${remCalc(12)};
    margin-top: ${remCalc(15)};
  }
`