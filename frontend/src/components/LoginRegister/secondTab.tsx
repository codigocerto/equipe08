import { useContext, useState } from "react";
import { UserRegister } from "../../@types/UserRegister";
import UserContext from "../../contexts/userContext";
import { FormErrors } from "./interface";
import * as S from './styles';

import { FaUserEdit } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

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
    if (!formData.password) newErrors.password = "Senha é obrigatória";
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
        <S.InputComIcone>
          <S.Icone>
            <FaUserEdit size="1.2rem" />
          </S.Icone>
          <S.Input placeholder="Nome Completo" value={formData.name} onChange={handleChange} type={'text'} name="name" title={'Nome Completo'} required aria-label="Insira seu nome completo" />
        </S.InputComIcone>
        {errors.name && <p>{errors.name}</p>}
        <S.InputComIcone>
          <S.Icone>
            <FaPhoneAlt size="1.2rem" />
          </S.Icone>
          <S.Input placeholder="(24) 99999-9999" value={formData.phone} onChange={handleChange} type={'text'} name="phone" title={'Telefone para contato'} required aria-label="Telefone para contato" />
        </S.InputComIcone>
        {errors.phone && <p>{errors.phone}</p>}
        <S.InputComIcone>
          <S.Icone>
            <MdAlternateEmail size="1.2rem" />
          </S.Icone>
          <S.Input placeholder="contato@email.com" value={formData.email} onChange={handleChange} type={'email'} name="email" title={'E-mail'} required aria-label="Insira o endereço de e-mail" />
        </S.InputComIcone>
        {errors.email && <p>{errors.email}</p>}
        <S.InputComIcone>
          <S.Icone>
            <RiLockPasswordFill size="1.2rem" />
          </S.Icone>
          <S.Input placeholder="Senha" value={formData.password} onChange={handleChange} type={'password'} name="password" title={'Senha'} required aria-label="Senha" />
        </S.InputComIcone>
        {errors.password && <p>{errors.password}</p>}
        <S.ButtonFirstTab textbutton="Acessar Conta" />
      </form>
    </S.SecondTab>

  );
};
export default SecondTab;