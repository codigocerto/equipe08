import { useState } from 'react';
import * as S from './styles';
import FirstTab from './../LoginRegister/firstTab'
import SecondTab from './../LoginRegister/secondTab';
import { useTranslation } from 'react-i18next';

const Tabs = () => {
  const [tabLogin, setTabLogin] = useState('login');

  const handleLogin = () => {
    setTabLogin("login");
  };

  const handleSignUp = () => {
    setTabLogin("cadastro");
  };

  const { t } = useTranslation();

  return (
    <>
      <S.Tabs>
        <nav aria-label="Main Navigation">
          <S.UlNavbar role="tablist">
            <S.LiNavbar
              role="presentation"
              className={tabLogin === "login" ? "active" : ""}
            >
              <S.ButtonTab
                role="tab"
                aria-selected={tabLogin === "login"}
                aria-controls="login-tab"
                id="login-button"
                onClick={handleLogin}
              >
                Login
              </S.ButtonTab>
            </S.LiNavbar>
            <S.LiNavbar
              role="presentation"
              className={tabLogin === "cadastro" ? "active" : ""}
            >
              <S.ButtonTab
                role="tab"
                aria-selected={tabLogin === "cadastro"}
                aria-controls="cadastro-tab"
                id="cadastro-button"
                onClick={handleSignUp}
              >
                {t('register.register')}
              </S.ButtonTab>
            </S.LiNavbar>
          </S.UlNavbar>
        </nav>
      </S.Tabs>
      <S.outlet>
        {tabLogin === "login" ? (
          <div role="tabpanel" id="login-tab" aria-labelledby="login-button">
            <FirstTab />
          </div>
        ) : (
          <div role="tabpanel" id="cadastro-tab" aria-labelledby="cadastro-button">
            <SecondTab />
          </div>
        )}
      </S.outlet>
    </>
  );
};

export default Tabs;
