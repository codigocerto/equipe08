import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// Animação para os pontos
const dotAnimation = keyframes`
  10%, 90% { opacity: 0; }
  40%, 60% { opacity: 1; }
`;

// Estilo para o wrapper do input
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Estilo para o campo de texto e os estados dinâmicos
const StyledInput = styled.input<{ isTyping: boolean }>`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: all 0.45s;
  
  ${({ isTyping }) =>
    isTyping &&
    `
      opacity: 1;
      transform: translateY(0);
      border-color: #0077ff;
  `}
`;

// Estilização para o texto que acompanha o input
const DemoText = styled.div<{ isTyping: boolean }>`
  position: absolute;
  top: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: ${({ isTyping }) => (isTyping ? 1 : 0)};
  transform: translateY(${({ isTyping }) => (isTyping ? '0' : '20px')});
  transition: opacity 0.45s, transform 0.45s;
  pointer-events: none;

  &::before,
  &::after {
    content: ".";
    opacity: 0;
    animation: ${dotAnimation} 1.5s infinite;
  }
`;

// Estilo para o ícone de visibilidade
const VisibilityToggle = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const PasswordInput: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputWrapper>
      <DemoText isTyping={isTyping}>Digite sua senha</DemoText>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Senha"
        isTyping={isTyping}
      />
      <VisibilityToggle onClick={togglePasswordVisibility}>
        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
      </VisibilityToggle>
    </InputWrapper>
  );
};

export default PasswordInput;