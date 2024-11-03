import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import * as S from './styles';
import { FormErrors } from "./interface";
import { UserLogin } from "../../@types/UserLogin";

import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

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
      <S.InputComIcone>
        <S.Icone>
          <FaUser size="1.2rem" />
        </S.Icone>
        <S.Input placeholder="contato@email.com" type={'email'} title={'E-mail'} required aria-label="Endereço de e-mail" onChange={handleChange} name="email" value={formLogin.email} />
      </S.InputComIcone>
      {errors.email && <p>{errors.email}</p>}
      <S.InputComIcone>
        <S.Icone>
          <RiLockPasswordFill size="1.2rem" />
        </S.Icone>
        <S.Input placeholder="Senha" type={'password'} title={'Senha'} required arial-label="Senha" onChange={handleChange} name="password" value={formLogin.password} />
      </S.InputComIcone>
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