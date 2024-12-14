import { useState } from "react";
import logo from "/assets/images/logo.png";
import closeButton from "/assets/images/close-button.png";
import Modal from "./../Modal/index";

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
        <a href="#home">
          <S.Logo src={logo} alt="Logo" />
        </a>
        <S.NavBar>
          <a href="#contato">Contato</a>
          <a href="#trilhas">Trilhas</a>
          <S.Button onClick={handleOpenModal}>Login</S.Button>
          <Modal isOpen={openModal} onClose={handleCloseModal} />
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
        <ul>
          <li>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleOpenModal();
              }}
            >
              Login
            </a>
            <Modal isOpen={openModal} onClose={handleCloseModal} />
          </li>
          <li>
            <a href="#home" onClick={handleMenuToggle}>
              Home
            </a>
          </li>
          <li>
            <a href="#trilhas" onClick={handleMenuToggle}>
              Trilhas
            </a>
          </li>
          <li>
            <a href="#contato" onClick={handleMenuToggle}>
              Contato
            </a>
          </li>
        </ul>
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;
