import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
  padding: 120px 0;
  margin: 0 auto;

  h1 {
    font-size: 96px;
    font-weight: 600;
    line-height: 116.18px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 40px;
      line-height: 48.41px;
      align-self: flex-start;
    }
  }

  span {
    display: block;
  }
  
  img {
    @media (max-width: ${breakpoints.desktop}) {
      height: 146px;
      width: 200px;
      margin-top: 32px;
      text-align: right;
      align-self: flex-end;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    padding: 48px 32px 32px;
  }
`