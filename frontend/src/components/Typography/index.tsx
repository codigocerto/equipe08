import React, { ElementType } from "react";
import { TypographyProps } from "./interface";
import * as S from './styles';
import { StyleSheetManager } from "styled-components";

const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  color,
  fontweight,
  textdecoration,
  as,
  ...rest
}) => {
  const Element = as as ElementType;

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "fontweight"}>
      <S.Text
        as={Element}
        size={size}
        color={color}
        fontweight={fontweight}
        textdecoration={textdecoration}
        {...rest}
      >
        {children}
      </S.Text>
    </StyleSheetManager>
  );
};

export default Typography;