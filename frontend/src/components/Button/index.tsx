import { StyleSheetManager } from "styled-components";

import { ButtonProps } from "./interface";
import * as S from "./styles";

const Button = ({
  textbutton,
  onClick,
  bgcolor,
  hoverbgcolor,
  textcolor,
  icon,
  widthbutton,
  borderbutton,
  paddingbutton,
  fontweightbutton,
  boxshadowbutton,
  textdecoration,
  textcolorhover,
  ...rest
}: ButtonProps) => {
  return (
    <StyleSheetManager shouldForwardProp={(props) => props !== "bgcolor"}>
      <S.StylizedButton
        onClick={onClick}
        textdecoration={textdecoration}
        textcolor={textcolor}
        textcolorhover={textcolorhover}
        bgcolor={bgcolor}
        hoverbgcolor={hoverbgcolor}
        boxshadowbutton={boxshadowbutton}
        borderbutton={borderbutton}
        widthbutton={widthbutton}
        paddingbutton={paddingbutton}
        fontweightbutton={fontweightbutton}
        {...rest}
      >
        {icon && <span>{icon}</span>}
        {textbutton}
      </S.StylizedButton>
    </StyleSheetManager>
  );
};

export default Button;