import { useTranslation } from "react-i18next";
import * as S from "./styles";

import { TrailCardPropInterface } from "./TrailCardPropInterface";

const TrailCard = ({ img, title, subtitle, $isDark, showBtn }: TrailCardPropInterface) => {

  const { t } = useTranslation();

  return (
    <S.Main $isDark={$isDark}>
      <S.Container>
        <img src={img} alt={title} />
        <S.Content>
          <div>
            <S.ContentTitle as="h1">{title}</S.ContentTitle>
            <S.ContentSubTitle as="p">{subtitle}</S.ContentSubTitle>
          </div>
          {showBtn && <S.Btn icon={<i className="fa fa-arrow-right"></i>} showBtn={showBtn} textbutton={t('trailCard.button')} />}
        </S.Content>
      </S.Container>
      <S.BlackRetangle $isDark={$isDark}></S.BlackRetangle>
    </S.Main>
  );
};

export default TrailCard;
