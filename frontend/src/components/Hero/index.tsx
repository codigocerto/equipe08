import Button from '../Button'
import * as S from './styles'

const Hero = () => {
  return (
    <S.Hero>
      <S.Title>Bem-vindo à <span>Código Certo Coders.</span></S.Title>
      <S.SubTitle>Junte-se à nossa comunidade de desenvolvedores apaixonados</S.SubTitle>
      <Button $isHeroButton>Participe agora</Button>
    </S.Hero>
  )
}

export default Hero