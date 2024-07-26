import { Link, useLocation } from 'react-router-dom'
import { useState } from "react"

import logo from "../../assets/images/logo.png"

import closeButton from "../../assets/images/close-button.png"

import * as S from "./styles"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();

  const isRootPath = location.pathname === '/';

  return (
    <S.Header>
      <S.ContentContainer>
        <Link to='/'><S.Logo src={logo} alt="Logo" /></Link>
        <S.NavBar>
          <a href="#contato">Contato</a>
          <Link to='/trilhas'>
            Trilhas
          </Link>
          <a href="#login">
            <S.LoginIcon></S.LoginIcon>
            Login
          </a>
        </S.NavBar>
        {isMenuOpen ? (
          <S.CloseButton src={closeButton} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
            <span />
          </S.Hamburguer>
        )}
      </S.ContentContainer>
      <S.NavMobile 
        className={isMenuOpen ? "is-open" : ""}
        style={{ 
          backdropFilter: isRootPath ? 'none' : 'blur(15px)',
          backgroundColor: isRootPath ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <a href="#participeagora" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '1' } as React.CSSProperties}>Participe agora</a>
        <Link to='/' onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '2' } as React.CSSProperties}>Home</Link>
        <Link to='/trilhas' onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '3' } as React.CSSProperties}>Trilhas</Link>
        <a href="#contato" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '4' } as React.CSSProperties}>Contato</a>
      </S.NavMobile>
    </S.Header>
  )
}

export default Header
