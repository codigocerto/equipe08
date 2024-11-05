import { useContext, useState } from "react";
import { UserRegister } from "../../@types/UserRegister";
import UserContext from "../../contexts/userContext";
import Input from "../Input";
import { FormErrors } from "./interface";
import * as S from './styles';

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

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Nome é obrigatório";
    if (!formData.email) newErrors.email = "Email é obrigatório";
    if (!formData.phone) newErrors.phone = "Telefone é obrigatório";
    if (!formData.password || formData.password.length < 3) newErrors.password = "Senha é obrigatória e deve possuir no mínimo 3 caracteres";
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
      <S.Heading4 as="h3"><S.DivRed>&nbsp;</S.DivRed>Crie sua conta</S.Heading4>
      <form method="post" onSubmit={handlesubmit}>
        <S.Paragraph as="p">Crie sua conta de modo gratuito!</S.Paragraph>
        <Input value={formData.name} onChange={handleChange} type={'text'} name="name" title={'Nome Completo'} required aria-label="Insira seu nome completo" />
        {errors.name && <S.P>{errors.name}</S.P>}
        <Input value={formData.phone} onChange={handleChange} type={'text'} name="phone" title={'Telefone para contato'} required aria-label="Telefone para contato" />
        {errors.phone && <S.P>{errors.phone}</S.P>}
        <Input value={formData.email} onChange={handleChange} type={'email'} name="email" title={'E-mail'} required aria-label="Insira o endereço de e-mail" />
        {errors.email && <S.P>{errors.email}</S.P>}
        <Input value={formData.password} onChange={handleChange} type={'password'} name="password" title={'Senha'} required aria-label="Senha" />
        {errors.password && <S.P>{errors.password}</S.P>}
        <S.ButtonFirstTab textbutton="Acessar Conta"/>
      </form>
    </S.SecondTab>

  );
};
export default SecondTab;