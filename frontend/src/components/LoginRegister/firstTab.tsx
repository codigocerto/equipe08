import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { UserLogin } from "../../@types/UserLogin";
import UserContext from "../../contexts/userContext";
import Input from "../Input";
import { FormErrors } from "./interface";
import * as S from "./styles";


const FirstTab = () => {

  const { handleLogin } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const [formLogin, setFormLogin] = useState<UserLogin>({
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormLogin({ ...formLogin, [name]: value });
  }

  const { t } = useTranslation();

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formLogin.email) newErrors.email = t('validationLoginRegister.email');
    if (!formLogin.password || (formLogin.password.length < 3)) newErrors.password = t('validationLoginRegister.password');
    return newErrors;
  }

  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      handleLogin(formLogin);
    }
  }


  return (
    <S.FirstTab>
      <form method="post" onSubmit={handlesubmit}>
        <S.Heading3 as="h3"><S.DivRed>&nbsp;</S.DivRed>{t('login.title')}</S.Heading3>
        <S.InputComIcone>
          <S.Icone>
            <FaUser size="1.2rem" />
          </S.Icone>
          <Input value={formLogin.email} type={'email'} title={'E-mail'} required aria-label="Endereço de e-mail" onChange={handleChange} name="email" />
        </S.InputComIcone>
        {errors.email && <S.P>{errors.email}</S.P>}
        <S.InputComIcone>
          <S.Icone>
            <RiLockPasswordFill size="1.2rem" />
          </S.Icone>
          <S.IconeVisiblitity onClick={() => togglePasswordVisibility()}>
            {showPassword ? <AiOutlineEyeInvisible size="1.3rem" /> : <AiOutlineEye size="1.3rem" />}
          </S.IconeVisiblitity>
          <Input value={formLogin.password} type={showPassword ? 'text' : 'password'} title={t('login.passwordInput')} required arial-label="Senha" onChange={handleChange} name="password" />
        </S.InputComIcone>
        {errors.password && <S.P>{errors.password}</S.P>}
        <S.ButtonFirstTab textbutton={t('login.submitButton')} />
      </form>
    </S.FirstTab>
  );
};
export default FirstTab;