import styled from 'styled-components'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'


export const Header = styled.header`
  background-color: ${colors.black};
  padding: 32px 0;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 32px;
    position: relative;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 60px;
    color: ${colors.white};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  }

  a:last-child {
    color: ${colors.red1};
    padding: 12px 24px;
    border: 1px solid ${colors.red1};
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
`

export const Hamburguer = styled.div`
  width: 48px;

  span {
    height: 6px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    border-radius: 8px;
    margin-bottom: 8px;
  }

    @media (min-width: ${breakpoints.desktop}) {
      display: none;
    }
`

export const NavMobile = styled.nav`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  max-height: 0;
  transition: max-height 0.8s ease-out, padding 0.3s ease-out;

  a {
    background-color: rgba(0, 0, 0, 0.4);
    color: ${colors.white};
    padding: 12px 0;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    display: block;
    opacity: 0;
    transition: opacity 0.3s ease-out, transform 0.9s ease-out;
    transform: translateY(-10px);
  }

  a:first-child {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  a:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.is-open {
    max-height: 216px;
    padding: 12px;

    a {
      opacity: 1; 
      transform: translateY(0);
    }
  }
`

export const CloseButton = styled.img`
  @media (min-width: ${breakpoints.desktop}) {
      display: none;
    }
`