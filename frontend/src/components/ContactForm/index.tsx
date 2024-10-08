import * as S from './styles'

const ContactForm = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Title as="h4"><span />Nosso contato</S.Title>
          <S.FormContainer>
            <S.Form>
              <S.InputContainer>
                <S.InfoContainer>
                  <S.Label htmlFor="name">Nome</S.Label>
                  <S.Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                  />
                </S.InfoContainer>
                <S.InfoContainer>
                  <S.Label htmlFor="phone">Telefone</S.Label>
                  <S.Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(24) 99999-9999"
                  />
                </S.InfoContainer>
              </S.InputContainer>
              <S.InfoContainer>
                <S.Label htmlFor="email">Email</S.Label>
                <S.Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="contato@email.com"
                />
              </S.InfoContainer>
              <S.InfoContainer>
                <S.Label htmlFor="message">Mensagem</S.Label>
                <S.TextArea
                  id="message"
                  name="message"
                  placeholder="O que você precisa?"
                />
              </S.InfoContainer>
              <S.Button type="submit">Enviar Mensagem</S.Button>
            </S.Form>
          </S.FormContainer>
        </S.Content>
      </S.Container>
    </S.Section>
  )
}

export default ContactForm