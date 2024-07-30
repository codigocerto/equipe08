import React, { useState } from 'react';
import * as T from './styles';
import FirstTab from '../Tabs/firstTab';
import SecondTab from '../Tabs/secondTab';

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

          <T.ulNavbar>
              <T.liNavbar className={tabLogin === "login" ? "active" : ""} onClick={handleLogin}>
                  <p>Login</p>
              </T.liNavbar>
              <T.liNavbar className={tabLogin === "cadastro" ? "active" : ""} onClick={handleSignUp}>
                  <p>Cadastro</p>
              </T.liNavbar>
          </T.ulNavbar>

        </T.Tabs>
        <T.outlet>
            {tabLogin === "login" ? <FirstTab /> : <SecondTab />}
        </T.outlet>
    </>

  );
};

export default Tabs;
