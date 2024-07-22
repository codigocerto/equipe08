import styled from "styled-components";
import { colors, breakpoints } from "../../styles";
import * as S from "../Button/styles";

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
  ${S.Button} {
    width: 208px;
  }

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

    ${S.Button} {
      align-self: flex-end;
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
