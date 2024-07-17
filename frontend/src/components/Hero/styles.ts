import styled from 'styled-components'
import { colors } from '../../styles'
import hero from '../../assets/images/hero.png'

export const Hero = styled.div`
  background-image: url(${hero});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 255px 0;

  h1, h2 {
    color: ${colors.white};
  }
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 77.45px;
  margin-bottom: 16px;
`

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 20.05px;
  margin-bottom: 32px;
`