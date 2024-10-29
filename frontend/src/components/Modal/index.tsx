import * as S from './styles'
import Tabs from './../Tab/index'
import vector from '../../assets/images/Vector 11.png'


export default function Modal({ isOpen = true }) {

    if (isOpen) {
        return (
            <S.Modal>
                <S.flexContainer>
                <img src={vector} alt="" />
                    <Tabs />
                </S.flexContainer>
            </S.Modal>
        )
    }

    return null
}
