import styled from 'styled-components'
import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Footer = styled.footer`
  background-color: ${colors.black};
  padding: 80px 0 42px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 16px 32px 12px;
  }
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

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    flex-direction: column;
    padding: 0;
    border-top: none;
    border-bottom: none;
    height: auto;
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

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 18px;
    }
  }

  p, li {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;

    @media (max-width: ${breakpoints.desktop}) {
      font-weight: 500;
      font-size: 12px;
      line-height: 32px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 0;
    margin-left: 0;
    padding: 15px 0 5px;
    border-top: 1px solid ${colors.gray3};
    border-bottom: 1px solid ${colors.gray3};
  }
`

export const InfoColumn = styled(ContactColumn)`
  display: revert;

  h3 {
    margin-bottom: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 4px;
  }
  }

  a {
    color: ${colors.gray2};
  }

  @media (max-width: ${breakpoints.desktop}) {
    border-top: none;
    border-bottom: 1px solid ${colors.gray3};
    padding-bottom: 16px;
  }
`

export const SocialMedia = styled.ul`
  display: flex;

  i {
    color: ${colors.gray2};
    font-size: 43px;
    margin-right: 44px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: 12px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    top: 5%;
    right: 4px;
  }
`

export const Copyright = styled.p`
  color: ${colors.gray2};
  font-weight: 400;
  font-size: 16px;
  line-height: 19.36px;
  margin-top: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 10px;
    line-height: 12.1px;
    margin-top: 15px;
  }
`