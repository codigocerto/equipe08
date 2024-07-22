import styled from 'styled-components'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Section = styled.div`
  padding: 160px 0 80px;

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    display: flex;
    padding: 203px 0 0;
  }
`

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.black};
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    align-items: end;
    padding: 160px 32px 12px;
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;

  span {
    display: inline-block;
    height: 47px;
    width: 8px;
    background-color: ${colors.red};
    margin-right: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 2px;
      height: 18px;
      margin-right: 4px;
    }
  }

  h1 {
    font-size: 64px;
    font-weight: 600;
    line-height: 77.45px;
    color: ${colors.white};

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 24px;
      line-height: 29.05px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: ${colors.gray1};
    margin-top: 32px;
    max-width: 585px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 12px;
      line-height: 24px;
      margin-top: 12px;
    }
  }

  img {
    position: absolute;
    top: -80px;
    right: 13px;
    border-radius: 8px;

    @media (max-width: ${breakpoints.desktop}) {
      height: 340px;
      width: 243px;
      top: 12px;
      left: 32px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: static;
    padding: 0;
  }
`