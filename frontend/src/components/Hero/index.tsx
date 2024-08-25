import * as S from "./styles"

const Hero = () => {
  return (
    <S.Hero>
      <S.Title as="h1">
        Bem-vindo à <span>Código Certo Coders.</span>
      </S.Title>
      <S.SubTitle as="h2">Junte-se à nossa comunidade de <span>desenvolvedores apaixonados</span></S.SubTitle>
      <S.Btn textbutton="Participe Agora" />
    </S.Hero>
  )
}

export default Hero;
