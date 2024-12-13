import { useTranslation } from 'react-i18next';
import computer from '../../../public/assets/images/computer.png';

import * as S from './styles';

const InfoSection = () => {

  const { t } = useTranslation();

  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Title as="h1"><span />{t('infosSection.title')}</S.Title>
          <S.Text as="p">{t('infosSection.body')}</S.Text>
          <img src={computer} alt="Computer" />
        </S.Content>
      </S.Container>
    </S.Section>
  )
}

export default InfoSection