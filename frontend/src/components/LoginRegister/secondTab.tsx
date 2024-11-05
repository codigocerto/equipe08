import { useContext, useState } from "react";
import { UserRegister } from "../../@types/UserRegister";
import UserContext from "../../contexts/userContext";
import Input from "../Input";
import { FormErrors } from "./interface";
import * as S from './styles';
import { useTranslation } from "react-i18next";

const SecondTab = () => {

  const { handleRegister } = useContext(UserContext);

  const [formData, setFormData] = useState<UserRegister>({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const phoneMask = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    const maskedValue = name === "phone" ? phoneMask(value) : value;
    setFormData({ ...formData, [name]: maskedValue });
  }

  const { t } = useTranslation();

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = t('validationLoginRegister.name');
    if (!formData.email) newErrors.email = t('validationLoginRegister.email');
    if (!formData.phone) newErrors.phone = t('validationLoginRegister.phone');
    if (!formData.password || formData.password.length < 3) newErrors.password = t('validationLoginRegister.password');
    return newErrors;
  }


  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      handleRegister(formData)
      setFormData({ name: '', phone: '', email: '', password: '' })
    }
  }

  return (

    <S.SecondTab>
      <S.Heading4 as="h3"><S.DivRed>&nbsp;</S.DivRed>{t('register.title')}</S.Heading4>
      <form method="post" onSubmit={handlesubmit}>
        <S.Paragraph as="p">{t('register.text')}</S.Paragraph>
        <Input value={formData.name} onChange={handleChange} type={'text'} name="name" title={t('register.nameInput')} required aria-label="Insira seu nome completo" />
        {errors.name && <S.P>{errors.name}</S.P>}
        <Input value={formData.phone} onChange={handleChange} type={'text'} name="phone" title={t('register.phoneInput')} required aria-label="Telefone para contato" />
        {errors.phone && <S.P>{errors.phone}</S.P>}
        <Input value={formData.email} onChange={handleChange} type={'email'} name="email" title={'E-mail'} required aria-label="Insira o endereço de e-mail" />
        {errors.email && <S.P>{errors.email}</S.P>}
        <Input value={formData.password} onChange={handleChange} type={'password'} name="password" title={t('register.passwordInput')} required aria-label="Senha" />
        {errors.password && <S.P>{errors.password}</S.P>}
        <S.ButtonFirstTab textbutton={t('register.submitButton')}/>
      </form>
    </S.SecondTab>

  );
};
export default SecondTab;