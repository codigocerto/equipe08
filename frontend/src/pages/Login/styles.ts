import styled from "styled-components";
import { colors, breakpoints } from "../../styles";


export const Container = styled.main `
    margin: 1rem 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    

`


export const MaskView = styled.div`
    background-color: #282A2D;
    width: 95%;
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
      border-radius: .5em;


`;

