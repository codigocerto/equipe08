import styled from 'styled-components';
import { colors, breakpoints } from '../../styles';

export const Tabs = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  justify-content: center;

`;

export const outlet = styled.div`
`;

export const ulNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: ${colors.black2};
    border: 1px solid ${colors.black};
    border-radius: 0.5rem;


  @media (min-width: ${breakpoints.tablet}) { 
    width: 70%;
    max-height: 512px;
  }
`;

export const liNavbar = styled.li`
    width: 100%;
    padding: .6rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
    border-radius: 0.5rem;
    margin: 0.2rem;
    color: ${colors.white}; // Ajuste a cor do texto
    
    &:nth-child(2) {
      border-radius: 0.5rem;
    }

    &.active {
      background-color: ${colors.red};
    }

    @media (min-width: ${breakpoints.tablet}) {
      width: 50%;
    }
  `
;
