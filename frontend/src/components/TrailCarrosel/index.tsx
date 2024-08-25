import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const titles = [
  {
    id: 1,
    title: "FrontEnd",
  },
  {
    id: 2,
    title: "BackEnd",
  },
  {
    id: 3,
    title: "FullStack",
  },
  {
    id: 4,
    title: "Quality Assurance",
  },
  {
    id: 5,
    title: "Ciência de Dados",
  },
  {
    id: 6,
    title: "UX/UI Designer",
  },
  {
    id: 7,
    title: "DevOps",
  },
];

const TrailCarrosel = () => {
  return (
    <S.Main>
      <S.MainTitle as="h1">Conheça nossas trilhas</S.MainTitle>
      <S.Container>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.04,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 3.08,
              spaceBetween: 0,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {titles.map((item) => (
            <SwiperSlide>
              <S.Content key={item.id}>
                <div>
                  <img src={`/src/assets/trails/trilha-${item.id}.svg`} alt="frontend" />
                </div>
                <S.ContentTitle as="h2">{item.title}</S.ContentTitle>
              </S.Content>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </S.Main>
  );
};

export default TrailCarrosel;
