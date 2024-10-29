import Input from "../Input";
import { FormErrors } from "./interface";
import * as S from './styles';
import { useState } from "react";


interface User {
  id?: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

const SecondTab = () => {

  const [user, setUser] = useState<User>({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const phoneMask = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g,"")
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target as HTMLInputElement;
    const maskedValue = name === "phone" ? phoneMask(value) : value;
    setUser({ ...user, [name]: maskedValue });
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!user.name) newErrors.name = "Nome é obrigatório";
    if (!user.email) newErrors.email = "Email é obrigatório";
    if (!user.phone) newErrors.phone = "Telefone é obrigatório";
    if (!user.password) newErrors.password = "Senha é obrigatória";
    return newErrors;
  }

  
  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      alert(`Nome: ${user.name}, Telefone: ${user.phone}, Email: ${user.email}, Senha: ${user.password}`)
    }

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  return (

    <S.SecondTab>
        <S.Heading4 as="h3"><S.DivRed>&nbsp;</S.DivRed>Crie sua conta</S.Heading4>
        <form method="post" onSubmit={handlesubmit}>
          <S.Paragraph as="p">Crie sua conta de modo gratuito!</S.Paragraph>
          <Input value={user.name} onChange={handleChange} type={'text'} name="name" title={'Nome Completo'} required aria-label="Insira seu nome completo"/>
          {errors.name && <p>{errors.name}</p>}
          <Input value={user.phone} onChange={handleChange} type={'text'} name="phone" title={'Telefone para contato'} required aria-label="Telefone para contato"/>
          {errors.phone && <p>{errors.phone}</p>}
          <Input value={user.email} onChange={handleChange} type={'email'} name="email" title={'E-mail'} required aria-label="Insira o endereço de e-mail"/>
          {errors.email && <p>{errors.email}</p>}
          <Input value={user.password} onChange={handleChange} type={'password'} name="password" title={'Senha'} required aria-label="Senha"/>
          {errors.password && <p>{errors.password}</p>}
          <S.ButtonFirstTab textbutton="Acessar Conta"/>
        </form>
    </S.SecondTab>
  
  );
};
export default SecondTab;