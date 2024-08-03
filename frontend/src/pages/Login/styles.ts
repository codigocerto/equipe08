import styled from "styled-components";
import { breakpoints } from "../../styles";


export const Container = styled.dialog `
    display:flex;
    justify-content: center;
`

export const MaskView = styled.div`
    background-color: #282A2D;
    width: 100%;
    margin: 1em;
    padding: 1em;
    border-radius: .5em;

    @media (min-width: ${breakpoints.tablet}) { 
        margin: 2em;    
        width: 60%;
        height: 100vh;
    }



`;

