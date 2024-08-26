import Input from "../Input";
import Button from '../Button';
import * as S from './styles';

const FirstTab = () => {
  return (

      <S.FirstTab>        
          <S.Heading3 as="h3"><S.DivRed>&nbsp;</S.DivRed>Entre em sua Conta</S.Heading3>
        
            <Input type={'email'} title={'E-mail'} required aria-label="Endereço de e-mail"/>
            <Input type={'password'} title={'Senha'} required arial-label="Senha"/>
          
          <S.Box>
            <S.Checkbox type="checkbox" id="rememberme" aria-label="Lembre-me"/> 
            <S.RememberMe>Lembre-me</S.RememberMe>
          </S.Box>

          <Button>Acessar Conta</Button>
      </S.FirstTab>

  );
};
export default FirstTab;