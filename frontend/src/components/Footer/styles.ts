import styled from 'styled-components'
import { colors } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: 80px 0 42px;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
`

export const ContentContainer = styled.div`
  display: flex;
  height: 265px;
  padding: 32px 0;
  border-top: 2px solid ${colors.gray3};
  border-bottom: 2px solid ${colors.gray3};

  img {
    height: 73px;
    width: 100px;
  }
`

export const ContactColumn = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: ${colors.gray2};
  margin-top: 22px;
  margin-left: 200px;

  h3 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  p, li {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
  }
`

export const InfoColumn = styled(ContactColumn)`
  display: revert;

  h3 {
    margin-bottom: 32px;
  }

  a {
    color: ${colors.gray2};
  }
`

export const SocialMedia = styled.ul`
  display: flex;

  i {
    color: ${colors.gray2};
    font-size: 36px;
    margin-right: 48px;
  }
`

export const Copyright = styled.p`
  color: ${colors.gray2};
  font-weight: 400;
  font-size: 16px;
  line-height: 19.36px;
  margin-top: 32px;
`