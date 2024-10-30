import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import Input from "../Input";
import * as S from './styles';
import { FormErrors } from "./interface";
import { UserLogin } from "../../@types/UserLogin";

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
    console.log(formLogin);
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formLogin.email) newErrors.email = "Email é obrigatório";
    if (!formLogin.password) newErrors.password = "Senha é obrigatória";
    return newErrors;
  }

  const handlesubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      handleLogin(formLogin)
      setFormLogin({ email: '', password: '' })
    }
    console.log(formLogin);
  }

  return (

    <S.FirstTab>

      <S.Heading3 as="h3"><S.DivRed>&nbsp;</S.DivRed>Entre em sua Conta</S.Heading3>
      <Input type={'email'} title={'E-mail'} required aria-label="Endereço de e-mail" onChange={handleChange} name="email" value={formLogin.email} />
      {errors.email && <p>{errors.email}</p>}
      <Input type={'password'} title={'Senha'} required arial-label="Senha" onChange={handleChange} name="password" value={formLogin.password} />
      {errors.password && <p>{errors.password}</p>}
      <S.Box>
        <S.Checkbox type="checkbox" id="rememberme" aria-label="Lembre-me" />
        <S.RememberMe>Lembre-me</S.RememberMe>
      </S.Box>
      <S.ButtonFirstTab type="submit" textbutton="Acessar Conta" onClick={() => handlesubmit()} />
    </S.FirstTab>

  );
};
export default FirstTab;