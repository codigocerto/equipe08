import styled from 'styled-components'
import { colors, breakpoints} from '../../styles'


export const Label = styled.div `
    color: ${colors.gray1};
    margin-bottom: 0.5em;   
    margin-top: 0.5em;   

`

export const Input = styled.input `
    
    background-color: ${colors.black2};
    border-radius: 0.5rem;
    border: 1px solid #000;
    width: 100%;
    height: 5vh;
    margin-bottom: 1.2em;
    color: ${colors.gray1};

    @media (min-width: ${breakpoints.tablet}) {
        width: 25vw;

        
    }
`