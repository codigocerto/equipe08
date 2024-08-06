import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'


export const FirstTab = styled.section`

    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & > div:nth-child(1) {
        margin-right: 4em;
    }

    & > div:nth-child(2) {
        display:flex;
        flex-direction: column;
    }

}`

export const SecondTab = styled.section`
    
    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row-reverse;

        & > div:nth-child(1) {
=           margin-left: 4em;
        }

        & > div:nth-child(2) {
            display:flex;
            flex-direction: column;
        }
    }
`

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


export const Logo = styled.img `
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
        display:block;
        width: 15vw;
    }
`


export const DivRed = styled.div `
    height: 1.875rem;
    background: ${colors.red};
    margin-right: 5px;
    
`


export const Heading3 = styled.h3 `
        
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.25rem;
    color: ${colors.white};
    margin: 1em 0 0.3em 0;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 2.25rem;
    }
`

export const Paragraph = styled.p `
    font-size: 0.75rem;
    color: ${colors.gray1};
    margin-bottom: 2em;
    font-weight: 300;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 0.875rem;
    }
`