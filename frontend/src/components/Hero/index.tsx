import Button from '../Button'
import * as S from './styles'

const Hero = () => {
  return (
    <S.Hero>
      <S.Title>Bem-vindo à Código Certo Coders.</S.Title>
      <S.SubTitle>Junte-se à nossa comunidade de desenvolvedores apaixonados</S.SubTitle>
      <Button isHeroButton>Participe agora</Button>
    </S.Hero>
  )
}

export default Hero