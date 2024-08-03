import react from 'react';
import Input from "../Input";
import logo from '../../assets/images/logo.png'
import Button from '../Button';
import * as S from './styles';


const SecondTab = () => {
 return (

    <S.SecondTab>        
      <div>
        <S.Logo src={logo} alt="logo" />
      </div>
      <div>

        <S.h3><S.divRed>&nbsp;</S.divRed>Crie sua conta</S.h3>
        <S.p>Crie sua conta de modo gratuito!</S.p>
        <Input type={'text'} title={'Nome Completo'} required/>
        <Input type={'number'} title={'Telefone para contato'} required/>
        <Input type={'email'} title={'E-mail'} required/>
        <Input type={'password'} title={'Senha'} required/>
        {/* <input type={'checkbox'} title={'Lembre-me'} required/> */}
        <Button $isHeroButton>Acessar Conta</Button>
      </div>
    </S.SecondTab>
  );
};
export default SecondTab;