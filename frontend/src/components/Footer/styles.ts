import styled from 'styled-components'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: ${remCalc(80)} 0 ${remCalc(42)};

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
  height: ${remCalc(265)};
  padding: ${remCalc(32)} 0;
  border-top: ${remCalc(2)} solid ${colors.gray3};
  border-bottom: ${remCalc(2)} solid ${colors.gray3};

  img {
    height: ${remCalc(73)};
    width: ${remCalc(100)};

    @media (max-width: ${breakpoints.desktop}) {
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
    font-size: ${remCalc(24)};
    line-height: ${remCalc(32)};

    @media (max-width: ${breakpoints.desktop}) {
      font-size: ${remCalc(18)};
    }
  }

  p, li {
    font-weight: 400;
    font-size: ${remCalc(18)};
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
    padding: ${remCalc(15)} 0 ${remCalc(5)};
    border-top: ${remCalc(1)} solid ${colors.gray3};
    border-bottom: ${remCalc(1)} solid ${colors.gray3};
  }
`

export const InfoColumn = styled(ContactColumn)`
  display: revert;

  h3 {
    margin-bottom: ${remCalc(32)};

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: ${remCalc(4)};
  }
  }

  a {
    color: ${colors.gray2};
  }

  @media (max-width: ${breakpoints.desktop}) {
    border-top: none;
    border-bottom: ${remCalc(1)} solid ${colors.gray3};
    padding-bottom: ${remCalc(16)};
  }
`

export const SocialMedia = styled.ul`
  display: flex;

  i {
    color: ${colors.gray2};
    font-size: ${remCalc(43)};
    margin-right: ${remCalc(44)};

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: ${remCalc(12)};
      font-size: ${remCalc(36)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 5%;
    right: ${remCalc(4)};
  }
`

export const Copyright = styled.p`
  color: ${colors.gray2};
  font-weight: 400;
  font-size: ${remCalc(16)};
  line-height: ${remCalc(19.36)};
  margin-top: ${remCalc(32)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(10)};
    line-height: ${remCalc(12.1)};
    margin-top: ${remCalc(15)};
  }
`