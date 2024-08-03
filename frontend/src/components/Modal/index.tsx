import React, { useState } from 'react'
import * as S from './styles';


export default function Modal({isOpen = true}) {

    if (isOpen) {
        return <S.modal>oi</S.modal>
    } 

    return null;
}
