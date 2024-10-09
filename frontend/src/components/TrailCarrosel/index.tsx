import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { trailsData } from "../../pages/Trails/data/trailsData";
import TrailCard from "../TrailCard";

const TrailCarrosel = () => {
  return (
    <S.Main>
      <S.Container>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {trailsData.map((item) => (
            <SwiperSlide>
              <S.Content key={item.id}>
                <TrailCard img={`/src/assets/trails/trilha-${item.id}.svg`} $isDark={item.$isDark} subtitle={item.subtitle} title={item.title} key={item.id} showBtn={false} />
              </S.Content>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </S.Main>
  );
};

export default TrailCarrosel;
