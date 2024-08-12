import { Props } from "./interface"

import { Link as LinkStyled } from './styles'

const Link = ({ $disabled=false, children, ...props}: Props) => {
  return (
    <LinkStyled $disabled={$disabled} {...props}>{children}</LinkStyled>
  )
}

export default Link