import * as S from './styles'; // Certifique-se de que o caminho está correto
import Tabs from './../Tab/index';

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export default function Modal({ isOpen = false, onClose }: ModalProps) {
    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
    };

    if (isOpen) {
        return (
            <>
                {!window.localStorage.getItem("@Auth:userToken") &&
                    <S.Modal>
                        <S.flexContainer>
                            <S.ButtonModal textbutton='X' onClick={handleCloseModal} />
                            <Tabs />
                        </S.flexContainer>
                    </S.Modal>}
            </>
        );
    }

    return null;
}
