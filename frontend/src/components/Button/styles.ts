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

  padding: ${(props) => props.$isHeroButton ? `${remCalc(8)} ${remCalc(32)}` : `${remCalc(16)} ${remCalc(32)}`};
  font-size: ${(props) => props.$isHeroButton ? `${remCalc(18)}` : `${remCalc(18)}`};
  font-weight: ${(props) => props.$isHeroButton ? '600' : '700'};
  line-height: ${(props) => props.$isHeroButton ? '38.73px' : '24px'};
  text-transform: ${(props) => props.$isHeroButton ? 'none' : 'uppercase'};
  cursor: pointer;

  span {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${(props) => props.$isHeroButton ? '12px 24px' : '16px 32px'};
    font-size: ${(props) => props.$isHeroButton ? '16px' : '18px'};
    line-height: ${(props) => props.$isHeroButton ? '19.36px' : '24px'};
  }
  
`

