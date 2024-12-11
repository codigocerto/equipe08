import { useTranslation } from "react-i18next";
import * as S from "./styles"

const Hero = () => {

  const { t } = useTranslation();

  return (
    <S.Hero>
      <S.Title as="h1">
        {t('hero.title')}
      </S.Title>
      <S.SubTitle as="h2">{t('hero.body')}</S.SubTitle>
      <S.Btn textbutton={t('hero.button')} />
    </S.Hero>
  )
}

export default Hero;
