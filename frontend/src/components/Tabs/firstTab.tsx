import react from 'react';
import Input from "../Input";
import logo from '../../assets/images/logo.png'
import Button from '../Button';
import * as S from './styles';

const FirstTab = () => {
  return (

      <S.FirstTab>        
        <div>
          <S.Logo src={logo} alt="logo" />
        </div>
        <div>

          <S.h3><S.divRed>&nbsp;</S.divRed>Entre em sua Conta</S.h3>
        
          <Input type={'email'} title={'E-mail'} required/>
          <Input type={'password'} title={'Senha'} required/>
          {/* <input type={'checkbox'} title={'Lembre-me'} required/> */}
          <Button $isHeroButton>Acessar Conta</Button>
        </div>
      </S.FirstTab>

  );
};
export default FirstTab;