import { useState } from 'react';
import * as T from './styles';
import FirstTab from '../LoginRegister/firstTab';
import SecondTab from '../LoginRegister/secondTab';

const Tabs = () => {
  const [tabLogin, setTabLogin] = useState('login');

  const handleLogin = () => {
    setTabLogin("login");
  };

  const handleSignUp = () => {
    setTabLogin("cadastro");
  };

  return (
    <>
      <T.Tabs>
        <nav aria-label="Main Navigation">
          <T.UlNavbar role="tablist">
            <T.LiNavbar
              role="presentation"
              className={tabLogin === "login" ? "active" : ""}
            >
              <T.ButtonTab
                role="tab"
                aria-selected={tabLogin === "login"}
                aria-controls="login-tab"
                id="login-button"
                onClick={handleLogin}
              >
                Login
              </T.ButtonTab>
            </T.LiNavbar>
            <T.LiNavbar
              role="presentation"
              className={tabLogin === "cadastro" ? "active" : ""}
            >
              <T.ButtonTab
                role="tab"
                aria-selected={tabLogin === "cadastro"}
                aria-controls="cadastro-tab"
                id="cadastro-button"
                onClick={handleSignUp}
              >
                Cadastro
              </T.ButtonTab>
            </T.LiNavbar>
          </T.UlNavbar>
        </nav>
      </T.Tabs>
      <T.outlet>
        {tabLogin === "login" ? (
          <div role="tabpanel" id="login-tab" aria-labelledby="login-button">
            <FirstTab />
          </div>
        ) : (
          <div role="tabpanel" id="cadastro-tab" aria-labelledby="cadastro-button">
            <SecondTab />
          </div>
        )}
      </T.outlet>
    </>
  );
};

export default Tabs;
