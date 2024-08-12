import styled from 'styled-components';
import { colors, breakpoints } from '../../styles';

export const Tabs = styled.div`
  width: 100%;
  // height: auto;
  // display: flex;
  // justify-content: center;
`;

export const outlet = styled.div`
`;

export const ButtonTab = styled.button`
  background-color: transparent;
  color: #FFF;
  border: none;
  width: 100%;
  height: 6vh;
  font-size: 1rem;
  font-weight: 400;
`;

export const UlNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.black2};
  border: 1px solid ${colors.black};
  border-radius: 0.5rem;
  max-height: 512px;
`;

export const LiNavbar = styled.li`
  width: 100%;
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
`;
