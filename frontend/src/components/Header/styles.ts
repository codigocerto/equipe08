import styled from 'styled-components'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'


export const Header = styled.header`
  background-color: ${colors.black};
  padding: ${remCalc(24)} 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(16)} ${remCalc(32)};
    position: relative;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${remCalc(1160)};
  width: 100%;
  margin: 0 auto;
`

export const Logo = styled.img`
  height: ${remCalc(80)};

  @media (max-width: ${breakpoints.desktop}) {
    height: ${remCalc(56)};
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: ${remCalc(48)};
    color: ${colors.white};
    font-size: ${remCalc(18)};
    font-weight: 400;
    line-height: ${remCalc(32)};
  }

  a:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.red};
    padding: ${remCalc(8)} ${remCalc(16)};
    border: ${remCalc(1)} solid ${colors.red};
    border-radius: ${remCalc(8)};

    img {
      margin-right: ${remCalc(10)};
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
      display: none;
  }
`

export const Hamburguer = styled.div`
  width: ${remCalc(32)};

  span {
    height: ${remCalc(2)};
    display: block;
    width: 100%;
    background-color: ${colors.white};
    border-radius: ${remCalc(4)};
    margin-bottom: ${remCalc(6)};
  }

    @media (min-width: ${breakpoints.desktop}) {
      display: none;
    }
`

export const NavMobile = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  border-bottom-right-radius: ${remCalc(8)};
  border-bottom-left-radius: ${remCalc(8)};
  max-height: 0;
  transition: max-height 2s ease-out, padding 0.5s ease-out;
  pointer-events: none;

  a {
    
    color: ${colors.white};
    padding: ${remCalc(8)} 0;
    margin-bottom: ${remCalc(8)};
    font-size: ${remCalc(14)};
    font-weight: 400;
    line-height: ${remCalc(18)};
    text-align: center;
    display: block;
    opacity: 0;
    transition: all .6s ease-out;
    transform: translateY(${remCalc(-5)});
  }

  a:first-child {
    border-top-right-radius: ${remCalc(8)};
    border-top-left-radius: ${remCalc(8)};
  }

  a:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: ${remCalc(8)};
    border-bottom-left-radius: ${remCalc(8)};
  }

  &.is-open {
    max-height: ${remCalc(216)};
    padding: ${remCalc(2)};
    pointer-events: auto;

    a {
      opacity: 1; 
      transform: translateY(0);
    }
  }
`

export const CloseButton = styled.img`
  height: ${remCalc(40)};
  @media (min-width: ${breakpoints.desktop}) {
      display: none;
    }
`