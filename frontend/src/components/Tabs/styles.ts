import styled from 'styled-components'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'


export const FirstTab = styled.div `
    


    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }


        & > div:nth-child(1) {
            // background: blue;
            margin-right: 4em;
        }

        & > div:nth-child(2) {
            display:flex;
            flex-direction: column;
        }

    }
`

export const SecondTab = styled.div `
   
    @media (min-width: ${breakpoints.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;

        & > div:nth-child(1) {
            // background: blue;
            margin-left: 4em;
        }

        & > div:nth-child(2) {
            display:flex;
            flex-direction: column;
        }
    }
`

export const Logo = styled.img `
    display: none;

    @media (min-width: ${breakpoints.tablet}) {
        display:block;
        width: 15vw;
    }
`


export const divRed = styled.div `
    height: 1.875rem;
    background: ${colors.red};
    margin-right: 5px;
    
`


export const h3 = styled.h3 `
        
    display:flex;
    align-items:center;
    font-weight: 600;
    font-size: 1.25rem;
    color: ${colors.white};
    margin: 1em 0 1em 0;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 2.25rem;
    }
`

export const p = styled.p `
    font-size: 0.75rem;
    color: ${colors.gray1};
    margin-bottom: 2em;
    font-weight: 300;

    @media (min-width: ${breakpoints.tablet}) {
        font-size: 0.875rem;
    }
`