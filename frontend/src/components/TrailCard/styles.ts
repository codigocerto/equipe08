import styled from "styled-components";
import { colors, breakpoints } from "../../styles";
import Button from "../Button";
import { remCalc } from "../../utils/remCalc";

export const Main = styled.div<{ $isDark: boolean | undefined }>`
  color: ${(props) => (props.$isDark ? `${colors.gray1}` : `${colors.black}`)};

  position: relative;
  height: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 32px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 120px;
  }
`;

export const Container = styled.div`
  margin: 15px auto;

  img {
    object-fit: cover;
    border-radius: 8px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 90%;

    img {
      height: 370px;
      object-position: bottom left;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;

    img {
      height: 340px;
      width: 50%;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 100%;

    img {
      height: 340px;
      object-fit: cover;
    }
  }
`;

export const Content = styled.div`
  @media (min-width: ${breakpoints.mobile}) {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    gap: 11px;
    margin: 4px 0 11px 0;

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      margin-top: 4px;

      h1 {
        font-size: 18px;
        font-weight: 600;
        text-align: center;

        &::before {
          content: " ";
          background-color: ${colors.red};
          height: 8px;
          width: 12px;
          display: inline-block;
          margin-right: 8px;
          transform: translateY(-30%);
        }
      }
    }
    p {
      font-size: 12px;
      margin-top: 11px;
      line-height: 24px;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 0 0 40px;
    gap: 20px;
    justify-content: space-between;

    p {
      margin-top: 20px;
    }
  }

  @media (min-width: ${breakpoints.desktop}) {
    /* Limita a largura do texto */
    width: 45%;

    > div {
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 36px;

        &::before {
          content: " ";
          margin-bottom: 8px;
          background-color: ${colors.red};
          height: 8px;
          width: 12px;
          display: block;
        }
      }
    }
    p {
      font-size: 18px;
      max-width: 476px;
    }
  }
`;

export const Btn = styled(Button)`
  width: 208px;
  align-self: flex-end;

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
    height: 460px;
    top: 50%;
    transform: translate(0%, -50%);
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 460px;
    top: 50%;
    left: 25%;
    transform: translate(0%, -50%);
  }
`;
