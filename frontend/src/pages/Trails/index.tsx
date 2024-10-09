import TrailCard from "../../components/TrailCard";
import * as S from "./styles";
import { trailsData } from "./data/trailsData";
import { Item } from "./data/Item.interface";
import TrailCarrosel from "../../components/TrailCarrosel";

const Trails = () => {
  return (
    <S.Container id="trails">
      <S.TitleDiv>
        <S.Title as="h1">Nossas Trilhas</S.Title>
      </S.TitleDiv>
      <S.CarrouselContainer>
        <TrailCarrosel />
      </S.CarrouselContainer>
      <S.CardContainer>
        {trailsData.map((item: Item) => (
          <TrailCard key={item.id} img={`/src/assets/trails/trilha-${item.id}.svg`} title={item.title} subtitle={item.subtitle} $isDark={item.$isDark} showBtn={true} />
        ))}
      </S.CardContainer>
    </S.Container>
  );
};

export default Trails;
