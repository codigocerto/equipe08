import Input from "../Input";
import Button from '../Button';
import * as S from './styles';


const SecondTab = () => {
 return (

    <S.SecondTab>        
        <S.Heading4><S.DivRed>&nbsp;</S.DivRed>Crie sua conta</S.Heading4>
        <S.Paragraph>Crie sua conta de modo gratuito!</S.Paragraph>
        <Input type={'text'} title={'Nome Completo'} required aria-label="Insira seu nome completo"/>
        <Input type={'number'} title={'Telefone para contato'} required aria-label="Telefone para contato"/>
        <Input type={'email'} title={'E-mail'} required aria-label="Insira o endereço de e-mail"/>
        <Input type={'password'} title={'Senha'} required aria-label="Senha"/>
        <Button $isHeroButton>Acessar Conta</Button>
    </S.SecondTab>
  
  );
};
export default SecondTab;