import { useTranslation } from "react-i18next";
import TrailCard from "../../components/TrailCard";
import TrailCarrosel from "../../components/TrailCarrosel";
import { Item } from "./Item.interface";
import * as S from "./styles";

const Trails = () => {

  const { t } = useTranslation();

  return (
    <S.Container id="trails">
      <S.TitleDiv>
        <S.Title as="h1">{t('trailsTitle')}</S.Title>
      </S.TitleDiv>
      <S.CarrouselContainer>
        <TrailCarrosel />
      </S.CarrouselContainer>
      <S.CardContainer>
        {(t('trails', { returnObjects: true }) as Item[]).map((item: Item) => (
          <TrailCard key={item.id} img={`/assets/trails/trilha-${item.id}.svg`} title={item.title} subtitle={item.subtitle} $isDark={item.$isDark} showBtn={true} />
        ))}
      </S.CardContainer>
    </S.Container>
  );
};

export default Trails;
