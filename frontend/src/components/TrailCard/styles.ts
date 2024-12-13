import styled from "styled-components";

import Button from "../Button";
import Typography from "../Typography";

import { breakpoints, colors } from "../../styles";
import { remCalc } from "../../utils/remCalc";

export const Main = styled.div<{ $isDark: boolean | undefined }>`
  color: ${(props) => (props.$isDark ? `${colors.gray1}` : `${colors.black}`)};
  position: relative;
  height: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: ${remCalc(61)};
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: ${remCalc(120)};
  }
`;

export const Container = styled.div`
  img {
    object-fit: cover;
    border-radius: ${remCalc(8)};
    margin: ${remCalc(15)};
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    padding: 0 ${remCalc(40)} ${remCalc(30)};
    min-height: ${remCalc(678)};

    img {
      height: ${remCalc(370)};
      object-position: bottom left;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-flow: row nowrap;
    // reseta o min-height do mobile
    min-height: 0;

    img {
      height: ${remCalc(340)};
      width: 50%;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 100%;
    
    img {
      object-fit: contain;
      height: ${remCalc(340)};
    }
  }
`;

export const Content = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${remCalc(11)};
    margin: ${remCalc(4)} 0 ${remCalc(11)} 0;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: ${remCalc(12)};
      margin-top: ${remCalc(32)};
    }

    p {
      font-size: ${remCalc(12)};
      margin-top: ${remCalc(11)};
      line-height: ${remCalc(24)};
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 0 0 ${remCalc(40)};
    gap: ${remCalc(20)};
    justify-content: space-between;

    p {
      margin-top: ${remCalc(20)};
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    /* Limita a largura do texto */
    width: 45%;

    > div {
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      font-size: ${remCalc(18)};
      max-width: ${remCalc(476)};
    }
  }
`;

export const ContentTitle = styled(Typography)`
  font-size: ${remCalc(18)};
  font-weight: 600;
  text-align: center;

  &::before {
    content: " ";
    background-color: ${colors.red};
    height: ${remCalc(8)};
    width: ${remCalc(12)};
    display: inline-block;
    margin-right: ${remCalc(8)};
    transform: translateY(-30%);
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(36)};

    &::before {
      content: " ";
      margin-bottom: ${remCalc(8)};
      background-color: ${colors.red};
      height: ${remCalc(8)};
      width: ${remCalc(12)};
      display: block;
    }
  }
`;

export const ContentSubTitle = styled(Typography)`
  font-size: ${remCalc(12)};
  margin-top: ${remCalc(11)};
  line-height: ${remCalc(24)};

  @media (min-width: ${breakpoints.tablet}) {
    margin-top: ${remCalc(20)};
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(18)};
    max-width: ${remCalc(476)};
  }
`;

export const Btn = styled(Button)<{ showBtn: boolean }>`
  width: ${remCalc(220)};
  align-self: flex-end;

  visibility: ${(props) => (props.showBtn ? `visible` : `hidden`)};

  background-color: ${colors.red};
  color: ${colors.white};
  border: none;
  border-radius: ${remCalc(8)};
  padding: ${remCalc(16)} ${remCalc(32)};
  font-size: ${(props) => (props.textbutton ? `${remCalc(18)}` : `${remCalc(18)}`)};
  font-weight: 700;
  line-height: ${remCalc(24)};
  text-transform: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${colors.red};
    filter: brightness(1.3);
    z-index: -1;
    transition: top 0.5s ease-in-out;
    color: black;
  }

  &::before {
    border-top-right-radius: ${remCalc(8)};
    border-top-left-radius: ${remCalc(8)};
  }

  &::after {
    top: 100%;
    border-bottom-right-radius: ${remCalc(8)};
    border-bottom-left-radius: ${remCalc(8)};
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover::before {
    top: 0;
    color: black;
  }

  &:hover::after {
    top: 50%;
    color: black;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(12)} ${remCalc(24)};
    font-size: ${(props) => (props.textbutton ? `${remCalc(16)}` : `${remCalc(14)}`)};
    line-height: ${remCalc(18)};
  }
`;

export const BlackRetangle = styled.div<{ $isDark: boolean | undefined }>`
  background-color: ${(props) => (props.$isDark ? `${colors.black}` : `${colors.white}`)};

  @media (min-width: ${breakpoints.mobile}) {
    height: 68%;
    width: 100vw;
    position: absolute;
    z-index: -1;
    top: 35%;
    left: auto;
    margin: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    height: ${remCalc(460)};
    top: 50%;
    transform: translate(0%, -50%);
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 100%;
    height: ${remCalc(460)};
    top: 50%;
    left: 25%;
    transform: translate(0%, -50%);
  }
`;
