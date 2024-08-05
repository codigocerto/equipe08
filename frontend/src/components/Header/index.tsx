import { useState } from "react";

import logo from "../../assets/images/logo.png";

import closeButton from "../../assets/images/close-button.png";
import Modal from './../Modal/index';

import * as S from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[openModal, setOpenModal] = useState(false);
 
  return (
    <S.Header>
      <S.ContentContainer>
        <S.Logo src={logo} alt="Logo" />
        <S.NavBar>
          <a href="#contato">Contato</a>
          <a href="#trilhas">Trilhas</a>
          <S.Button onClick={() => setOpenModal(true)}>Login</S.Button>
          <Modal isOpen={true}/>
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
        <a
          href="#Login"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ "--i": "1" } as React.CSSProperties}
        >
          Login
        </a>
        <a href="#home" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ "--i": "2" } as React.CSSProperties}>
          Home
        </a>
        <a href="#trilhas" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ "--i": "3" } as React.CSSProperties}>
          Trilhas
        </a>
        <a href="#contato" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ "--i": "4" } as React.CSSProperties}>
          Contato
        </a>
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;
