import { useState } from "react";

import Link from "../Link";

import logo from "../../assets/images/logo.png";
import closeButton from "../../assets/images/close-button.png";

import * as S from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <S.Header>
      <S.ContentContainer>
        <S.Logo src={logo} alt="Codigo Certo Logo" onClick={scrollToTop} />
        <S.NavBar>
          <Link href="#contato">Contato</Link>
          <Link href="#trilhas">Trilhas</Link>
          <Link href="#login">
            <S.LoginIcon />
            Login
          </Link>
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
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        <Link
          href="#participeagora"
          onClick={() => setIsMenuOpen(false)}
          style={{ "--i": "1" } as React.CSSProperties}
        >
          Participe agora
        </Link>
        <Link href="#home" onClick={() => setIsMenuOpen(false)} style={{ "--i": "2" } as React.CSSProperties}>
          Home
        </Link>
        <Link href="#trilhas" onClick={() => setIsMenuOpen(false)} style={{ "--i": "3" } as React.CSSProperties}>
          Trilhas
        </Link>
        <Link href="#contato" onClick={() => setIsMenuOpen(false)} style={{ "--i": "4" } as React.CSSProperties}>
          Contato
        </Link>
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;
