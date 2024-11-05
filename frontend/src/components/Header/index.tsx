import { useState } from "react";


import Link from "../Link";

import logo from "../../assets/images/logo.png";
import closeButton from "../../assets/images/close-button.png";
import Modal from './../Modal/index'

import * as S from "./styles";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <S.Header>
      <S.ContentContainer>
        <Link href="#home">
          <S.Logo src={logo} alt="Codigo Certo Logo" />
        </Link>
        <S.NavBar>
          <Link href="#contact">{t('header.contact-button')}</Link>
          <Link href="#trails">{t('header.trails-button')}</Link>
          {/* <Link href="#login">
            <S.LoginIcon />
            Login
          </Link> */}
        </S.NavBar>

        {isMenuOpen ? (
          <S.CloseButton src={closeButton} onClick={handleMenuToggle} />
        ) : (
          <S.Hamburguer onClick={handleMenuToggle}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
        )}
      </S.ContentContainer>
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        <Link href="#login" onClick={() => setIsMenuOpen(false)} style={{ "--i": "1" } as React.CSSProperties}>
          Login
        </Link>
        <Link href="#register" onClick={() => setIsMenuOpen(false)} style={{ "--i": "2" } as React.CSSProperties}>
          Cadastro
        </Link>
        <Link href="#home" onClick={() => setIsMenuOpen(false)} style={{ "--i": "3" } as React.CSSProperties}>
          Home
        </Link>
        <Link href="#trails" onClick={() => setIsMenuOpen(false)} style={{ "--i": "4" } as React.CSSProperties}>
          Trilhas
        </Link>
        <Link href="#contact" onClick={() => setIsMenuOpen(false)} style={{ "--i": "5" } as React.CSSProperties}>
          Contato
        </Link>
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;
