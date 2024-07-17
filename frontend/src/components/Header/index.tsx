import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.ContentContainer>
        <img src={logo}/>
        <S.NavBar>
          <a href='#contato'>Contato</a>
          <a href='#trilhas'>Trilhas</a>
          <a href='#participeagora'>Participe agora</a>
        </S.NavBar>
      </S.ContentContainer>
    </S.Header>
  )
}

export default Header