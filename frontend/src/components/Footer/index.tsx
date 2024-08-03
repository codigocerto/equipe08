import Link from '../Link'

import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.MainContainer>
        <S.ContentContainer>
          <img src={logo}/>
          <S.ContactColumn>
            <h3>Contato</h3>
            <p>codigocertocoders@gmail.com</p>
            <S.SocialMedia>
              <li><Link href=""><i className="fa-brands fa-whatsapp"></i></Link></li>
              <li><Link href=""><i className="fa-brands fa-discord"></i></Link></li>
              <li><Link href=""><i className="fa-brands fa-linkedin"></i></Link></li>
              <li><Link href=""><i className="fa-brands fa-github"></i></Link></li>
            </S.SocialMedia>
          </S.ContactColumn>
          <S.InfoColumn>
            <h3>Informações</h3>
            <ul>
              <li><Link href="#contato">Contato</Link></li>
              <li><Link href="#trilhas">Trilhas</Link></li>
            </ul>
          </S.InfoColumn>
        </S.ContentContainer>
        <S.Copyright>
          &copy; 2024 Código Certo Coders. Todos os direitos reservados.
        </S.Copyright>
      </S.MainContainer>
    </S.Footer>
  )
}

export default Footer