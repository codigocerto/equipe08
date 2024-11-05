import Link from '../Link'

import logo from '../../assets/images/logo.png'

import * as S from './styles'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const { t } = useTranslation();
  
  return (
    <S.Footer>
      <S.MainContainer>
        <S.ContentContainer>
          <img src={logo}/>
            <S.SocialMedia>
              <li><Link href=""><i className="fa-brands fa-whatsapp"></i></Link></li>
              <li><Link href=""><i className="fa-brands fa-discord"></i></Link></li>
              <li><Link href=""><i className="fa-brands fa-linkedin"></i></Link></li>
              <li><Link href=""><i className="fa-brands fa-github"></i></Link></li>
            </S.SocialMedia>
        </S.ContentContainer>
        <S.Copyright as="p">
          &copy; {t('footer.text')}
        </S.Copyright>
      </S.MainContainer>
    </S.Footer>
  )
}

export default Footer