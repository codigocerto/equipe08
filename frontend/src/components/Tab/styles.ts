import styled from 'styled-components';
import { colors, breakpoints } from '../../styles';

export const Tabs = styled.div`
  width: 50%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display:flex;
  justify-content: center;
`;

export const outlet = styled.div`
  // Adicione estilos para o outlet, se necessário
`;

export const ulNavbar = styled.nav`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.black};
  border-radius: 0.5rem;
  max-height: 512px;
  background: ${colors.black2};
`;

export const liNavbar = styled.li`
  width: 50%;
  padding: .6rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
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
