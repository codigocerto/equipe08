import { ReactNode } from 'react'
import { Button as ButtonStyle } from './styles'

export interface Props {
  children: ReactNode
  isHeroButton?: boolean
}

const Button = ({ children, isHeroButton = false } : Props) => {
  return (
    <ButtonStyle isHeroButton={isHeroButton}>{children}</ButtonStyle>
  )
}

export default Button