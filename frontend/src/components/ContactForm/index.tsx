import * as S from './styles'
import { FormData, FormErrors } from './interfaces';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = t('contactFormValidation.name');
    if (!formData.email) newErrors.email = t('contactFormValidation.email');
    if (!formData.phone) newErrors.phone = t('contactFormValidation.phone');
    if (!formData.message) newErrors.message = t('contactFormValidation.message');

    return newErrors;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Nome: ${formData.name}, Email: ${formData.email}, Telefone: ${formData.phone}, Mensagem: ${formData.message}`);
      //ENVIAR DADOS AQUI!
    }
  }
  
  const phoneMask = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g,"")
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  const onPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target
    input.value = phoneMask(input.value)
    setFormData({ ...formData, phone: input.value });
  }

  const { t } = useTranslation();

  return (
    <S.Section id="contact">
      <S.Container>
        <S.Content>
          <S.Title as="h4"><span />{t('contactForm.title')}</S.Title>
          <S.FormContainer>
            <S.Form onSubmit={onSubmit}>
              <S.InputContainer>
                <S.InfoContainer>
                  <S.Label htmlFor="name">{t('contactForm.inputName')}</S.Label>
                  <S.Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('contactForm.placeholderName')}
                    value={formData.name}
                    onChange={onChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </S.InfoContainer>
                <S.InfoContainer>
                  <S.Label htmlFor="phone">{t('contactForm.inputPhone')}</S.Label>
                  <S.Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(24) 99999-9999"
                    maxLength={15}
                    value={formData.phone}
                    onChange={onPhone}
                  />
                  {errors.phone && <p>{errors.phone}</p>}
                </S.InfoContainer>
              </S.InputContainer>
              <S.InfoContainer>
                <S.Label htmlFor="email">Email</S.Label>
                <S.Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('contactForm.placeholderEmail')}
                  value={formData.email}
                  onChange={onChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </S.InfoContainer>
              <S.InfoContainer>
                <S.Label htmlFor="message">{t('contactForm.inputMessage')}</S.Label>
                <S.TextArea
                  id="message"
                  name="message"
                  placeholder={t('contactForm.placeholderMessage')}
                  value={formData.message}
                  onChange={onChange}
                />
                {errors.message && <p>{errors.message}</p>}
              </S.InfoContainer>
              <S.Button type="submit">{t('contactForm.submitButton')}</S.Button>
            </S.Form>
          </S.FormContainer>
        </S.Content>
      </S.Container>
    </S.Section>
  )
}

export default ContactForm