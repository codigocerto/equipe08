import { useEffect, useRef } from "react";
import * as S from "./styles";
import Tabs from "./../Tab/index";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Modal({ isOpen = false, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (isOpen) {
    return (
      <>
        {!window.localStorage.getItem("@Auth:userToken") && (
          <S.Modal>
            <div ref={modalRef}>
              <S.flexContainer>
                <S.ButtonModal textbutton="X" onClick={handleCloseModal} />
                <Tabs />
              </S.flexContainer>
            </div>
          </S.Modal>
        )}
      </>
    );
  }

  return null;
}
