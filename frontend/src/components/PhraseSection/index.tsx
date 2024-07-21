import logo from '../../assets/images/logo.png'

import * as S from './styles'

const PhraseSection = () => {
  return (
    <S.Container>
      <h1>Construindo o <span>amanhã, hoje.</span></h1>
      <img src={logo} alt="logo" />
    </S.Container>
  )
}

export default PhraseSection