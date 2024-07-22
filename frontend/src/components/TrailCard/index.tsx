import * as S from "./styles";
import Button from "../Button";
import { TrailCardPropInterface } from "./TrailCardPropInterface";

const TrailCard = ({ img, title, subtitle, $isDark }: TrailCardPropInterface) => {
  return (
    <S.Main $isDark={$isDark}>
      <S.Container>
        <img src={img} alt={title} />
        <S.Content>
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <Button>
            MAIS SOBRE
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </Button>
        </S.Content>
      </S.Container>
      <S.BlackRetangle $isDark={$isDark}></S.BlackRetangle>
    </S.Main>
  );
};

export default TrailCard;
