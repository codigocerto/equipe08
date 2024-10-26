import styled from 'styled-components'

import Typography from '../Typography'

import { remCalc } from '../../utils/remCalc'

import { colors } from '../../styles'
import { breakpoints } from '../../styles'

export const Section = styled.section`
  padding: ${remCalc(40)} 0 ${remCalc(70)};

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    display: flex;
    padding: 0;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: ${remCalc(10)} ${remCalc(12)};

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(70)} ${remCalc(32)};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${remCalc(100)} ${remCalc(32)};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: ${remCalc(100)} ${remCalc(12)};
  }
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${remCalc(1160)};
  width: 100%;

  span {
    display: inline-block;
    height: ${remCalc(28)};
    width: ${remCalc(8)};
    background-color: ${colors.red};
    margin-right:${remCalc(8)};

    @media (max-width: ${breakpoints.tablet}) {
      width: ${remCalc(2)};
      height: ${remCalc(18)};
      margin-right: ${remCalc(4)};
    }
  }

  p {
    color: ${colors.red};
    margin-top: ${remCalc(-30)};
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: static;
    padding: 0;
  }
`

export const Title = styled(Typography)`
  font-size: ${remCalc(40)};
  font-weight: 600;
  line-height: ${remCalc(80)};


  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${remCalc(24)};
    line-height: ${remCalc(29)};
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin: ${remCalc(60)} auto;
  padding: ${remCalc(80)} ${remCalc(150)};
  border-radius: ${remCalc(30)};
  background-color: ${colors.gray4};

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${remCalc(20)};
    border-radius: ${remCalc(8)};
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: ${remCalc(20)};
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${remCalc(10)};
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${remCalc(40)};

  @media (max-width: ${breakpoints.tablet}) {
      gap: ${remCalc(20)};
      flex-direction: column;
    }

`

export const Input = styled.input`
  width: 100%;
  padding: ${remCalc(12)};
  margin: ${remCalc(10)} 0 ${remCalc(30)} 0;
  border: none;
  border-radius: ${remCalc(8)};
  font-size: ${remCalc(16)};
  
  &:focus {
    outline: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
`

export const TextArea = styled.textarea`
  height: ${remCalc(170)};
  padding: ${remCalc(10)};
  margin: ${remCalc(10)} 0 ${remCalc(30)} 0;
  border: none;
  border-radius: ${remCalc(8)};
  font-size: ${remCalc(16)};
  resize: vertical;
  
  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  font-size: ${remCalc(20)};
  color: ${colors.white};
`

export const Button = styled.button`
  width: ${remCalc(300)};
  height: ${remCalc(70)};
  background-color: ${colors.red};
  color: #fff;
  border: none;
  border-radius: ${remCalc(8)};
  cursor: pointer;
  font-size: ${remCalc(18)};
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  margin: 0 auto;
  
  &:hover {
    background-color: ${colors.white};
    border: ${remCalc(1)} solid ${colors.red};
    color: ${colors.red};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: ${remCalc(14)};
    width: ${remCalc(200)};
    height: ${remCalc(60)};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: ${remCalc(14)};
    width: ${remCalc(130)};
    height: ${remCalc(60)};
  }

  
`