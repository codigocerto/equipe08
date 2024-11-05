import { useTranslation } from 'react-i18next';
import { Flag, SwitchContainer, SwitchInput, SwitchLabel } from './styles';
import brazilFlag from '../../assets/images/brasil.jpg'
import unitedStatesFlag from '../../assets/images/estados-unidos.png'

function TranslationButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <SwitchContainer>
      <SwitchInput type="checkbox" checked={i18n.language === 'en'} onChange={toggleLanguage} />
      <SwitchLabel>
        <Flag src={brazilFlag} alt="Bandeira do Brasil" title="Bandeira do Brasil" />
        <Flag src={unitedStatesFlag} alt="Bandeira dos Estados Unidos" title="Bandeira dos Estados Unidos" />
      </SwitchLabel>
    </SwitchContainer>
  );
}

export default TranslationButton;
