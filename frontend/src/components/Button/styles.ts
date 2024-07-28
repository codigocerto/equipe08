import styled from 'styled-components'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

import { Props } from './interface'

export const Button = styled.button<Props>`
  background-color: ${colors.red};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: ${(props) => props.$isHeroButton ? `${remCalc(8)} ${remCalc(24)}` : `${remCalc(16)} ${remCalc(32)}`};
  font-size: ${(props) => props.$isHeroButton ? `${remCalc(18)}` : `${remCalc(18)}`};
  font-weight: ${(props) => props.$isHeroButton ? '600' : '700'};
  line-height: ${(props) => props.$isHeroButton ? `${remCalc(38)}` : `${remCalc(24)}`};
  text-transform: ${(props) => props.$isHeroButton ? 'none' : 'uppercase'};
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${colors.red};
    filter: brightness(1.3);
    z-index: -1;
    transition: top 0.5s ease-in-out;
    color: black;
  }

  &::before {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &::after {
    top: 100%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover::before {
    top: 0;
    color: black;
  }

  &:hover::after {
    top: 50%;
    color: black;
  }

  span {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(12)} ${remCalc(24)};
    font-size: ${(props) => props.$isHeroButton ? `${remCalc(16)}` : `${remCalc(14)}`};
    line-height: ${remCalc(18)};
  }
  
`

