import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'


export const FirstTab = styled.section``

export const SecondTab = styled.section``

export const Box = styled.div`
    align-items: center;
    display: flex;
    color: ${colors.white};
    margin-bottom: 1em;
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
`;



export const DivRed = styled.div `
    height: 1.875rem;
    background: ${colors.red};
    margin-right: 5px;
    
`


export const Heading3 = styled.h3 `
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.875rem;
    color: ${colors.white};
    margin: 1em 0 1.3em 0;
`

export const Heading4 = styled.h3 `
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.875rem;
    color: ${colors.white};
    margin: 1em 0 0.3em 0;
`


export const Paragraph = styled.p `
    font-size: 0.75rem;
    color: ${colors.gray1};
    margin-bottom: 2em;
    font-weight: 300;
`