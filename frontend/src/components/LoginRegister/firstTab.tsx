import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import Input from "../Input";
import * as S from './styles';
import { FormErrors } from "./interface";
import { UserLogin } from "../../@types/UserLogin";
import 'react-toastify/dist/ReactToastify.css';

const FirstTab = () => {

  const { handleLogin } = useContext(UserContext);

  const [formLogin, setFormLogin] = useState<UserLogin>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormLogin({ ...formLogin, [name]: value });
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formLogin.email) newErrors.email = "Email é obrigatório";
    if (!formLogin.password || (formLogin.password.length < 3)) newErrors.password = "Senha é obrigatória e deve possuir no mínimo 3 caracteres";
    return newErrors;
  }

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      handleLogin(formLogin)
      setFormLogin({ email: '', password: '' })
    }
  }

  return (
    <S.FirstTab>
      <form method="post" onSubmit={handlesubmit}>
        <S.Heading3 as="h3"><S.DivRed>&nbsp;</S.DivRed>Entre em sua Conta</S.Heading3>
        <Input value={formLogin.email} type={'email'} title={'E-mail'} required aria-label="Endereço de e-mail" onChange={handleChange} name="email" />
        {errors.email && <S.P>{errors.email}</S.P>}
        <Input value={formLogin.password} type={'password'} title={'Senha'} required arial-label="Senha" onChange={handleChange} name="password" />
        {errors.password && <S.P>{errors.password}</S.P>}
        <S.Box>
          <S.Checkbox type="checkbox" id="rememberme" aria-label="Lembre-me" />
          <S.RememberMe>Lembre-me</S.RememberMe>
        </S.Box>
        <S.ButtonFirstTab textbutton="Acessar Conta" />
      </form>
    </S.FirstTab>
  );
};
export default FirstTab;