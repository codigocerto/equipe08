import { useEffect, useState } from "react";


import Link from "../Link";

import logo from "../../assets/images/logo.png";
import vectorWhite from "../../assets/images/Vector 9.png";
import closeButton from "../../assets/images/close-button.png";
import Modal from './../Modal/index'

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

  const token = window.localStorage.getItem('@Auth:userToken');
  const [userToken, setUserToken] = useState<string>('');

  useEffect(() => {
    if (token) {
      const payload = token ? token.split('.')[1] : ''; // Pega a segunda parte do token
      const userTokenObj = JSON.parse(atob(payload)); // Decodifica de Base64 para JSON
      setUserToken(userTokenObj.name || ''); // Aqui estão suas informações
    } else {
      console.log('Token não encontrado');
    }
  }, [token]);

  return (
    <S.Header>
      <S.ContentContainer>
        <Link href="#home">
          <S.Logo src={logo} alt="Codigo Certo Logo" />
        </Link>
        <S.NavBar>
          <Link href="#contact">Contato</Link>
          <Link href="#trails">Trilhas</Link>
          <Link href="#login">
            <div onClick={handleOpenModal}>
              <S.DivLogin>
                <div>
                  <S.LoginIcon />
                </div>
                <S.LoginDivContextUsers>
                  {!token ? <S.Span>Olá, faça seu login ou cadastre-se<S.ImgLogin src={vectorWhite} alt="vectorWhite" /></S.Span>
                  :
                  <S.Span>Olá {userToken}, minha conta<S.ImgLogin src={vectorWhite} alt="vectorWhite"/></S.Span>}
                </S.LoginDivContextUsers>
              </S.DivLogin>
            </div>
          </Link>
          <Modal isOpen={openModal} onClose={handleCloseModal} />
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
