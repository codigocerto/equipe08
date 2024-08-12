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

        <S.Heading3><S.DivRed>&nbsp;</S.DivRed>Crie sua conta</S.Heading3>
        <S.Paragraph>Crie sua conta de modo gratuito!</S.Paragraph>
        <Input type={'text'} title={'Nome Completo'} required aria-label="Insira seu nome completo"/>
        <Input type={'number'} title={'Telefone para contato'} required aria-label="Telefone para contato"/>
        <Input type={'email'} title={'E-mail'} required aria-label="Insira o endereço de e-mail"/>
        <Input type={'password'} title={'Senha'} required aria-label="Senha"/>
        <Button $isHeroButton>Acessar Conta</Button>
      </div>
    </S.SecondTab>
  
  );
};
export default SecondTab;