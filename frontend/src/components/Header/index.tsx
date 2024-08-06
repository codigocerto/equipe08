import { useState } from "react";

import logo from "../../assets/images/logo.png";
import closeButton from "../../assets/images/close-button.png";
import Modal from './../Modal/index';

import * as S from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <S.Header>
      <S.ContentContainer>
        <S.Logo src={logo} alt="Logo" />
        <S.NavBar>
          <a href="#contato">Contato</a>
          <a href="#trilhas">Trilhas</a>
          <S.Button onClick={handleOpenModal}>Login</S.Button>
          <Modal isOpen={openModal}  />
        </S.NavBar>

        {isMenuOpen ? (
          <S.CloseButton src={closeButton} onClick={handleMenuToggle} />
        ) : (
          <S.Hamburguer onClick={handleMenuToggle}>
            <span />
            <span />
            <span />
            <span />
          </S.Hamburguer>
        )}
      </S.ContentContainer>
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        <S.ButtonMobile onClick={handleOpenModal} style={{ "--i": "1" } as React.CSSProperties}>
          Login
        </S.ButtonMobile>
        <Modal isOpen={openModal} />
        <a href="#home" onClick={handleMenuToggle} style={{ "--i": "2" } as React.CSSProperties}>
          Home
        </a>
        <a href="#trilhas" onClick={handleMenuToggle} style={{ "--i": "3" } as React.CSSProperties}>
          Trilhas
        </a>
        <a href="#contato" onClick={handleMenuToggle} style={{ "--i": "4" } as React.CSSProperties}>
          Contato
        </a>
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;
