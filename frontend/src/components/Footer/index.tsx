import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.MainContainer>
        <S.ContentContainer>
          <Link to='/'><img src={logo}/></Link>
          <S.ContactColumn>
            <h3>Contato</h3>
            <p>codigocertocoders@gmail.com</p>
            <S.SocialMedia>
              <li><a href=""><i className="fa-brands fa-whatsapp"></i></a></li>
              <li><a href=""><i className="fa-brands fa-discord"></i></a></li>
              <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href=""><i className="fa-brands fa-github"></i></a></li>
            </S.SocialMedia>
          </S.ContactColumn>
          <S.InfoColumn>
            <h3>Informações</h3>
            <ul>
              <li><a href="#contato">Contato</a></li>
              <li><Link to='/trilhas'>Trilhas</Link></li>
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