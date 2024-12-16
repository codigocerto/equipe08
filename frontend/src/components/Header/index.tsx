import { useContext, useEffect, useState } from "react";
import logo from "/assets/images/logo.png";
import vectorWhite from "/assets/images/Vector 9.png";
import closeButton from "/assets/images/close-button.png";
import Modal from "./../Modal/index";

import * as S from "./styles";
import UserContext from "../../contexts/userContext";
import { useTranslation } from "react-i18next";
import Link from "../Link";

const Header = () => {
  const [userToken, setUserToken] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { handleLogout } = useContext(UserContext)

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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

  const token = window.localStorage.getItem('@Auth:userToken');

  useEffect(() => {
    if (token) {
      const payload = token ? token.split('.')[1] : ''; // Pega a segunda parte do token
      const userTokenObj = JSON.parse(atob(payload)); // Decodifica de Base64 para JSON
      setUserToken(userTokenObj.name || '');
    } else {
      console.log('Token não encontrado');
    }
  }, [token]);

  return (
    <S.Header>
      <S.ContentContainer>
        <a href="#home">
          <S.Logo src={logo} alt="Logo" />
        </a>
        <S.NavBar>
          <Link href="#contato">Contato</Link>
          <Link href="#trilhas">Trilhas</Link>
          <Link onClick={handleOpenModal}>
            <S.DivLogin>
              <S.LoginIcon />
              <S.LoginDivContextUsers>
                {!token && <S.SpanLogin>{t('header.loginButton')}<S.VectorDisLogged src={vectorWhite} alt="vectorWhite" /></S.SpanLogin>}
                {token &&
                  <S.UserUl>
                    <S.UserLi onClick={toggleDropdown}>
                      <S.SpanLogin>{t('login.welcome', {
                        userToken: userToken,
                      })}<S.VectorLogged src={vectorWhite} alt="vectorWhite" /></S.SpanLogin>
                    </S.UserLi>
                    <S.Dropdown isOpen={isDropdownOpen}>
                      <S.Logout onClick={() => handleLogout()}>
                        <svg width="30" height="21" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V24.9977C0 25.55 0.447715 25.9977 1 25.9977H13.9986C14.5509 25.9977 14.9986 25.55 14.9986 24.9977V20.9981C14.9986 20.4458 14.5509 19.9981 13.9986 19.9981C13.4463 19.9981 12.9986 20.4458 12.9986 20.9981V23.9977H2V2H12.9986V4.99962C12.9986 5.5519 13.4463 5.99962 13.9986 5.99962C14.5509 5.99962 14.9986 5.5519 14.9986 4.99962V1C14.9986 0.447715 14.5509 0 13.9986 0H1ZM17.7053 6.29247C17.3148 5.90195 16.6816 5.90194 16.2911 6.29246C15.9006 6.68299 15.9005 7.31615 16.2911 7.70668L20.5833 11.999H8.99906C8.44677 11.999 7.99906 12.4467 7.99906 12.999C7.99906 13.5513 8.44677 13.999 8.99906 13.999H20.5833L16.2911 18.2913C15.9005 18.6818 15.9006 19.315 16.2911 19.7055C16.6816 20.0961 17.3148 20.0961 17.7053 19.7055L23.7046 13.7061C24.0952 13.3156 24.0952 12.6824 23.7046 12.2919L17.7053 6.29247Z" />
                        </svg>
                        <S.SpanLogout>{t('login.logout')}</S.SpanLogout>
                      </S.Logout>
                    </S.Dropdown>
                  </S.UserUl>
                }
              </S.LoginDivContextUsers>
            </S.DivLogin>
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
            <span />
          </S.Hamburguer>
        )}
      </S.ContentContainer>
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        {!token ? <>
          <ul>
            <li>
              <S.LinkMobile
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal();
                }}
              >
                Login
              </S.LinkMobile>
              <Modal isOpen={openModal} onClose={handleCloseModal} />
            </li>
            <li>
              <S.LinkMobile href="#home" onClick={handleMenuToggle}>
                Home
              </S.LinkMobile>
            </li>
            <li>
              <S.LinkMobile href="#trilhas" onClick={handleMenuToggle}>
                Trilhas
              </S.LinkMobile>
            </li>
            <li>
              <S.LinkMobile href="#contato" onClick={handleMenuToggle}>
                Contato
              </S.LinkMobile>
            </li>
          </ul>
        </>
          :
          <>
            <ul>
              <li>
                <S.LinkMobile href="#home" onClick={handleMenuToggle}>
                  Home
                </S.LinkMobile>
              </li>
              <li>
                <S.LinkMobile href="#trilhas" onClick={handleMenuToggle}>
                  Trilhas
                </S.LinkMobile>
              </li>
              <li>
                <S.LinkMobile href="#contato" onClick={handleMenuToggle}>
                  Contato
                </S.LinkMobile>
              </li>
              <li>
                <S.Logout onClick={() => handleLogout()}>
                  <svg width="30" height="21" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V24.9977C0 25.55 0.447715 25.9977 1 25.9977H13.9986C14.5509 25.9977 14.9986 25.55 14.9986 24.9977V20.9981C14.9986 20.4458 14.5509 19.9981 13.9986 19.9981C13.4463 19.9981 12.9986 20.4458 12.9986 20.9981V23.9977H2V2H12.9986V4.99962C12.9986 5.5519 13.4463 5.99962 13.9986 5.99962C14.5509 5.99962 14.9986 5.5519 14.9986 4.99962V1C14.9986 0.447715 14.5509 0 13.9986 0H1ZM17.7053 6.29247C17.3148 5.90195 16.6816 5.90194 16.2911 6.29246C15.9006 6.68299 15.9005 7.31615 16.2911 7.70668L20.5833 11.999H8.99906C8.44677 11.999 7.99906 12.4467 7.99906 12.999C7.99906 13.5513 8.44677 13.999 8.99906 13.999H20.5833L16.2911 18.2913C15.9005 18.6818 15.9006 19.315 16.2911 19.7055C16.6816 20.0961 17.3148 20.0961 17.7053 19.7055L23.7046 13.7061C24.0952 13.3156 24.0952 12.6824 23.7046 12.2919L17.7053 6.29247Z" />
                  </svg>
                  <S.SpanLogout>{t('login.logout')}</S.SpanLogout>
                </S.Logout>
              </li>
            </ul>
          </>
        }
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;
