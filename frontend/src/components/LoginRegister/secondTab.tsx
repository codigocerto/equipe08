import Input from "../Input";
import * as S from './styles';
import { useState } from "react";
import { User } from "../../@types/@types";

const SecondTab = () => {

  const [user, setUser] = useState<User>({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  
  const handlesubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    console.log(user)
  }

  return (

    <S.SecondTab>
        <S.Heading4 as="h3"><S.DivRed>&nbsp;</S.DivRed>Crie sua conta</S.Heading4>
        <form method="post" onSubmit={handlesubmit}>
          <S.Paragraph as="p">Crie sua conta de modo gratuito!</S.Paragraph>
          <Input value={user.name} onChange={handleChange} type={'text'} name="name" title={'Nome Completo'} required aria-label="Insira seu nome completo"/>
          <Input value={user.phone} onChange={handleChange} type={'number'} name="phone" title={'Telefone para contato'} required aria-label="Telefone para contato"/>
          <Input value={user.email} onChange={handleChange} type={'email'} name="email" title={'E-mail'} required aria-label="Insira o endereço de e-mail"/>
          <Input value={user.password} onChange={handleChange} type={'password'} name="password" title={'Senha'} required aria-label="Senha"/>
          <S.ButtonFirstTab textbutton="Acessar Conta"/>
        </form>
    </S.SecondTab>
  
  );
};
export default SecondTab;