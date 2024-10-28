import { StyleSheetManager } from "styled-components";

import * as S from "./styles";
import { ButtonProps } from "./interface";

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
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "bgcolor"}>
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