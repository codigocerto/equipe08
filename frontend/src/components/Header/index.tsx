
import { useState } from "react"

import logo from "../../assets/images/logo.png"

import closeButton from "../../assets/images/close-button.png"

import * as S from "./styles"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.Header>
      <S.ContentContainer>
        <S.Logo src={logo} alt='Logo'/>
        <S.NavBar>
          <a href='#contato'>Contato</a>
          <a href='#trilhas'>Trilhas</a>
          <a href='#login'>Login</a>
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
        }        
      </S.ContentContainer>
      <S.NavMobile 
        className={isMenuOpen ? "is-open" : ""}
      >
        <a href="#participeagora" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '1' } as React.CSSProperties}>Participe agora</a>
        <a href="#home" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '2' } as React.CSSProperties}>Home</a>
        <a href="#trilhas" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '3' } as React.CSSProperties}>Trilhas</a>
        <a href="#contato" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ '--i': '4' } as React.CSSProperties}>Contato</a>
      </S.NavMobile>
    </S.Header>
  )
}

export default Header
