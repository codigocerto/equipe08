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

export const P = styled.p`
    color: ${colors.red};
    padding-bottom: 1em;
`

export const SecondTab = styled.section`
`

export const InputComIcone = styled.div`
    position: relative;

input {
    font-size: 16px;
    padding-left: 2.5rem;
    color: ${colors.white};
}
`

export const VisibilityToggle = styled.span`
    color: ${colors.gray1};
    position: absolute;
    right: 23px;
    top: 73.9%;
    transform: translateY(-50%);
    cursor: pointer;
`;

export const Icone = styled.div`
    position: absolute;
    top: calc(100% - 46.5%);
    left: 2%;
    transform: translate(-10%, -10%);
    color: ${colors.gray1};
`;

export const IconeVisiblitity = styled(Icone)`
    margin: auto;
    left: calc(100% - 2rem);
`

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