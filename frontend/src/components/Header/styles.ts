import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  background-color: ${colors.black};
  padding: 32px 0;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 60px;
    color: ${colors.white};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  }

  a:last-child {
    color: ${colors.red};
    padding: 12px 24px;
    border: 1px solid ${colors.red};
    border-radius: 8px;
  }
`