import { useTranslation } from 'react-i18next'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

const PhraseSection = () => {

  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Phrase as="h1">{t('phraseSection')}</S.Phrase>
      <img src={logo} alt="logo" />
    </S.Container>
  )
}

export default PhraseSection