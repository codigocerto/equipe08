import styled from "styled-components"
import Button from '../Button'

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #29292982;
`

export const flexContainer = styled.div`
    position: fixed;
    width: 40vw;
    top: 50%;
    left: 50%;
    transform: translate(-10%, -60%);
    background-color: #282A2D;
    border-radius: 0.5em;
    padding: 1em;
`

export const ButtonModal = styled(Button)`
    position: relative;
    left: 45%;
    top: -0.5rem;
    width: 100%;
    background-color: transparent;
    margin: auto;
    color: white;
    font-size: 1.5em;
    border: none;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: red;
    }
`
