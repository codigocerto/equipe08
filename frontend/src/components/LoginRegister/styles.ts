import styled from 'styled-components'

import Typography from '../Typography'

import { colors } from '../../styles'
import Button from '../Button'


export const FirstTab = styled.section`
`

export const ButtonFirstTab = styled(Button)`
    margin-top: 1.5em;
    width: 100%;
    height: 3.125em;
    font-size: 1.125em;
    font-weight: 600;
    background-color: ${colors.red};
    color: ${colors.white};
    border: none;
    border-radius: 0.3125em;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${colors.red2};
    }
`

export const SecondTab = styled.section``

export const Box = styled.div`
    align-items: center;
    display: flex;
    color: ${colors.white};
    margin: 5px 5px;
`

export const RememberMe = styled.label`
    margin-left: .5em;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    background-color: ${colors.black2};
    appearance: none;
    margin: 0;
    font: inherit;
    color: red;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid black;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
`

export const InputComIcone = styled.div`
  position: relative;

  input {
    font-size: 16px;
    padding-left: 2.5rem;
    color: #fff;
  }
`

export const Icone = styled.div`
  position: absolute;
  top: 2.300em;
  left: 0.6125em;
  cursor: pointer;
`;

export const DivRed = styled.div`
    height: 1.875em;
    background: ${colors.red};
    margin-right: 5px;
`

export const Heading3 = styled(Typography)`
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.875em;
    color: ${colors.white};
    margin: 1em 0 1.3em 0;
`

export const Heading4 = styled(Typography)`
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.875em;
    color: ${colors.white};
    margin: 1em 0 0.3em 0;
`


export const Paragraph = styled(Typography)`
    font-size: 0.75em;
    color: ${colors.gray1};
    margin-bottom: 2em;
    font-weight: 300;
`