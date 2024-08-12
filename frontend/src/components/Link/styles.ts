import styled from "styled-components"

export const Link = styled.a<{$disabled?: boolean }>`
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`