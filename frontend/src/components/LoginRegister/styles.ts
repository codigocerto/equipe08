import styled from 'styled-components'

import Typography from '../Typography'

import { colors } from '../../styles'
import Button from '../Button'


export const FirstTab = styled.section`
`

export const ButtonFirstTab = styled(Button)`
    margin-top: 1.5em;
    width: 100%;
    height: 3.125rem;
    font-size: 1.125rem;
    font-weight: 600;
    background-color: ${colors.red};
    color: ${colors.white};
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: ${colors.red2};
    }
`

export const P = styled.p`
    color: ${colors.red};
    padding-bottom: 1em;
`

export const SecondTab = styled.section`
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.white};
    margin-top: .5em;
`

export const RememberMe = styled.label`
    margin-left: .5em;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    /* background-color: ${colors.black2}; */
    appearance: none;
    background-color: transparent;
    font: inherit;
    color: red;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid black;
    border-radius: 0.15em;

&:checked {
    background-color: ${colors.red}; /* Cor do fundo quando está marcado */
}

&:checked::after {
    content: '';
    display: inline-block;
    position: relative;
    left: 0.2em;
    top: -0.23em;
    width: 0.35em;
    height: 0.7em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
}
`

export const DivRed = styled.div`
    height: 1.875rem;
    background: ${colors.red};
    margin-right: 5px;
    
`


export const Heading3 = styled(Typography)`
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.875rem;
    color: ${colors.white};
    margin: 1em 0 1.3em 0;
`

export const Heading4 = styled(Typography)`
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.875rem;
    color: ${colors.white};
    margin: 1em 0 0.3em 0;
`


export const Paragraph = styled(Typography)`
    font-size: 0.75rem;
    color: ${colors.gray1};
    margin-bottom: 2em;
    font-weight: 300;
`