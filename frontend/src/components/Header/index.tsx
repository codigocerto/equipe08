import { useState } from 'react'

import logo from '../../assets/images/logo.png'
import login from '../../assets/images/icons/login.png'
import closeButton from '../../assets/images/close-button.png'


import * as S from './styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.Header>
      <S.ContentContainer>
        <S.Logo src={logo} alt='Logo'/>
        <S.NavBar>
          <a href='#contato'>Contato</a>
          <a href='#trilhas'>Trilhas</a>
          <a href='#participeagora'>
            <img src={login} />
            Login
          </a>
        </S.NavBar>
        { isMenuOpen ? (
          <S.CloseButton src={closeButton} onClick={() => setIsMenuOpen(false)}/>
        ) : 
          <S.Hamburguer onClick={() => setIsMenuOpen(true)}>
            <span />
            <span />
            <span />
            <span />
          </S.Hamburguer>
        }        
      </S.ContentContainer>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <a href='#participeagora'>Participe agora</a>
        <a href='#home'>Home</a>
        <a href='#trilhas'>Trilhas</a>
        <a href='#contato'>Contato</a>
      </ S.NavMobile>
    </S.Header>
  )
}

export default Header