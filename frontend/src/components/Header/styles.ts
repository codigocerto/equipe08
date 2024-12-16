import styled from "styled-components"

import { Link } from "../Link/styles"

import { remCalc } from "../../utils/remCalc"
import { colors } from "../../styles"
import { breakpoints } from "../../styles"

interface DropdownProps {
  isOpen: boolean;
}

export const LoginIcon = styled.div`
  width: 26px;
  height: 26px;
  border: 2px solid ${colors.red};
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${remCalc(10)};
  transition: all 0.5s ease-in-out 0.1s;

  &::before {
    content: "";
    width: calc(26px - 80%);
    height: calc(26px - 80%);
    border: 2px solid ${colors.red};
    border-radius: 50%;
    position: absolute;
    top: 3.5px;
    transition: all 0.5s ease-in-out 0.1s;
  }

  &::after {
    content: "";
    width: calc(26px - 60%);
    height: 5px;
    border: 2px solid ${colors.red};
    border-top: none;
    border-radius: 0 0 12px 12px;
    position: absolute;
    bottom: 1px;
    transform: rotate(180deg);
    transition: all 0.5s ease-in-out 0.1s;
  }
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.black};
  padding: ${remCalc(24)} 0;
  z-index: 3;

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(16)} ${remCalc(32)};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${remCalc(1160)};
  width: 67%;
  margin: 0 auto;
`;


export const Logo = styled.img`
  height: ${remCalc(80)};
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    height: ${remCalc(56)};
    width: ${remCalc(77)};
    cursor: auto;
  }
`

export const ButtonMobile = styled.button`
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.red};
  padding: ${remCalc(6)} ${remCalc(12)};
  border: ${remCalc(2)} solid ${colors.red};
  border-radius: ${remCalc(8)};
  text-decoration: none; /* Remove o sublinhado padrão de links */
  transition: all 0.5s ease-out;
  font-size: ${remCalc(18)};
  font-weight: 400;
  background: transparent;

  &::before {
    content: "";
    display: inline-block;
    width: ${remCalc(32)};
    height: ${remCalc(32)};
    margin-right: ${remCalc(10)};
    transition: all 0.5s ease-out;
  }

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30vw;

  ${Link} {
    margin-left: ${remCalc(48)};
    color: ${colors.white};
    font-size: ${remCalc(18)};
    font-weight: 400;
    line-height: ${remCalc(32)};
    position: relative;
    /* padding: 0 10px; */
    transition: color 0.6s ease-out;

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3){
      &:after {
        content: "";
        position: absolute;
        background-color: ${colors.red};
        height: 3px;
        width: 0;
        left: 0;
        bottom: ${remCalc(-7)};
        transition: 0.6s ease-out;
        border-radius: ${remCalc(6)};
      }

      &:hover {
        color: ${colors.red};
      }

      &:hover:after {
        width: 100%;
      }
    }
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 40vw;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const DivLogin = styled.div`
    display: flex;
    align-items: center;
`

export const LoginP = styled.div`
    width: ${remCalc(144)};
    font-size: ${remCalc(15)};
    line-height: ${remCalc(18)};
`
export const VectorLogged = styled.img`
    width: ${remCalc(14)};
    position: absolute;
    top: ${remCalc(30)};
    left: ${remCalc(105)};
`
export const VectorDisLogged = styled.img`
    width: ${remCalc(14)};
    position: absolute;
    top: ${remCalc(30)};
    left: ${remCalc(157)};
`
    
export const LoginDivContextUsers = styled.div`
    width: ${remCalc(160)};
    display: flex;
    flex-direction: column;
`

export const UserUl = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
`;

export const UserLi = styled.li`
    color: white;
`

export const SpanLogin = styled.span`
    display: flex;
    align-items: center;
    color: white;
    font-size: 1rem;
    line-height: 1.3rem ;
    letter-spacing: -0.005rem;
    white-space: pre-line;
`

export const SpanLogout = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1rem;
    line-height: 1.3rem ;
    letter-spacing: -0.05rem;
    white-space: nowrap;
`

export const Dropdown = styled.li<DropdownProps>`
  position: absolute;
  top: 3.5rem;
  right: 1.3rem;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  background-color: #333;
  padding: 1.5rem;
  border-radius: 0.5rem;
  cursor: auto;
`;

export const Logout = styled.button`
    justify-content: center;
    background: none;
    border: none;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    color: white;

  svg {
    fill: white;
  }

  &:hover {
    &:nth-child(1), svg, span {
      color: ${colors.red};
      fill: ${colors.red}
    }
  }
`

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: ${remCalc(36)};

    span {
      height: ${remCalc(4)};
      display: block;
      width: 100%;
      background-color: ${colors.white};
      border-radius: ${remCalc(8)};
      margin-bottom: ${remCalc(6)};

      &:last-child {
        margin-bottom: ${remCalc(0)};
      }
    }
  }
`

export const NavMobile = styled.nav`
position: absolute;
background-color: ${colors.gray4};
top: 100%;
right: 0;
width: 100%;
height: 0;
transition: height 0.3s ease-in, padding 0.3s ease-in;
pointer-events: none;
z-index: 2;
border-bottom-left-radius: ${remCalc(8)};
border-bottom-right-radius: ${remCalc(8)};
display: none;
flex-direction: column; /* Disposição em coluna */

ul {
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column; /* Estilo vertical para os itens */
  gap: ${remCalc(16)}; /* Espaçamento entre os itens */
}

li {
  text-align: center; /* Centraliza o texto */
}

&.is-open {
  height: auto;
  padding: ${remCalc(12)} 0 ${remCalc(8)};
  pointer-events: auto;
  display: flex; /* Torna visível como flex container */
  transition: height 0.3s ease-in, padding 0.3s ease-in;
}
`;

export const LinkMobile = styled.a`
color: ${colors.white};
text-decoration: none; /* Remove sublinhado */
font-size: ${remCalc(18)};
font-weight: 400;
padding: ${remCalc(12)} 0;
transition: color 0.3s ease;
cursor: pointer;

&:hover {
  color: ${colors.red}; /* Cor de hover */
}
`;


export const CloseButton = styled.img`
  height: ${remCalc(36)};

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
