import { Button as ButtonStyle } from './styles'
import { Props } from './interface'


const Button = ({ children, isHeroButton = false } : Props) => {
  return (
    <ButtonStyle isHeroButton={isHeroButton}>{children}</ButtonStyle>
  )
}

export default Button