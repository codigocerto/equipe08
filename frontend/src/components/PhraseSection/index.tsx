import logo from '../../assets/images/logo.png'

import * as S from './styles'

const PhraseSection = () => {
  return (
    <S.Container>
      <S.Phrase as="h1">Construindo o <span>amanhã, hoje.</span></S.Phrase>
      <img src={logo} alt="logo" />
    </S.Container>
  )
}

export default PhraseSection