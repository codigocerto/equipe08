import React from "react";
import TrailCard from "../../components/TrailCard";
import * as S from "./styles";
import { items } from "./data/trailsData";
import { Item } from "./data/Item.interface";

const Trails = () => {
  return (
    <S.Container id="trails">
      <S.Title>
        <h1>Nossas Trilhas</h1>
      </S.Title>
      <S.CardContainer>
        {items.map((item: Item) => (
          <TrailCard
            key={item.id}
            img={`/src/assets/trails/trilha-${item.id}.svg`}
            title={item.title}
            subtitle={item.subtitle}
            $isDark={item.$isDark}
          />
        ))}
      </S.CardContainer>
    </S.Container>
  );
};

export default Trails;
