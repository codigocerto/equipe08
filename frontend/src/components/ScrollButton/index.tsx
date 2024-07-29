import { useEffect, useState } from "react";

import * as S from './styles'

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.3;

    if (window.pageYOffset > scrollThreshold) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <S.ScrollButton onClick={scrollToTop} isVisible={isVisible}>
      <i className="fa fa-angle-up" />
    </S.ScrollButton>
  )
}

export default ScrollButton;