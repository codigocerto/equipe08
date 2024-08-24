import * as S from './styles'
import Tabs from './../Tab/index'


export default function Modal({isOpen = true}) {

    if (isOpen) {
        return (
            <S.Modal>
                <S.flexContainer>
                    <Tabs/>
                </S.flexContainer>
            </S.Modal>
        )
    } 

    return null
}
