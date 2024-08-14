import { ButtonProps } from "./interface";
import * as S from "./styles";

const Button = ({ icon, textbutton, ...rest }: ButtonProps) => {
  return (
    <S.Button {...rest}>
      {textbutton}
      {icon && <S.Icon>{icon}</S.Icon>}
    </S.Button>
  );
};

export default Button;
