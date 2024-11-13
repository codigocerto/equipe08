export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  $disabled?: boolean
  children: React.ReactNode
}