import styled from "styled-components"

import hero from "../../assets/images/hero.png"

import Button from "../Button"
import Typography from '../Typography'

import { remCalc } from "../../utils/remCalc"
import { colors } from "../../styles"
import { breakpoints } from "../../styles"

export const Hero = styled.section`
  background-image: url(${hero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${remCalc(128)};
  padding: ${remCalc(200)} ${remCalc(220)};

  h1,
  h2 {
    color: ${colors.white};
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(224)} 0 ${remCalc(280)};
    margin-top: ${remCalc(88)};
  }
`;

export const Title = styled(Typography)`
  font-size: ${remCalc(48)};
  font-weight: 600;
  line-height: ${remCalc(72)};
  margin-bottom: ${remCalc(16)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(32)};
    line-height: ${remCalc(40)};
    text-align: center;
    margin: 0 ${remCalc(14)} ${remCalc(16)};

    span {
      display: block;
    }
  }
`;

export const SubTitle = styled(Typography)`
  font-size: ${remCalc(22)};
  font-weight: 400;
  line-height: ${remCalc(24)};
  margin-bottom: ${remCalc(32)};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: ${remCalc(16)};
    line-height: ${remCalc(20)};
    text-align: center;
    margin: 0 ${remCalc(4)} ${remCalc(56)};

    span {
      display: block;
    }
  }
`;

export const Btn = styled(Button)`
  background-color: ${colors.red};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
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
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }

  &::after {
    top: 100%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
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
