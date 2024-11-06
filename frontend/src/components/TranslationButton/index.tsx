import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlagIcon, LanguageMenu, LanguageOption, SwitchButton, SwitchContainer } from './styles';
import brazilFlag from '../../assets/images/brasil.jpg'
import unitedStatesFlag from '../../assets/images/estados-unidos.png'

function TranslationButton() {
  const { i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setMenuOpen(false);
  };


  return (
    <SwitchContainer>
    <SwitchButton onClick={toggleMenu} menuOpen={menuOpen}>
      <i className="fa fa-globe"></i>
    </SwitchButton>
    {menuOpen && (
      <LanguageMenu>
        <LanguageOption onClick={() => changeLanguage('en')}>
          <FlagIcon src={unitedStatesFlag} alt="English" title="English"/>
          English
        </LanguageOption>
        <LanguageOption onClick={() => changeLanguage('pt')}>
          <FlagIcon src={brazilFlag} alt="Português" title="Português"/>
          Português
        </LanguageOption>
      </LanguageMenu>
    )}
  </SwitchContainer>
  );
}

export default TranslationButton;
