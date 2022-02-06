import styled from 'styled-components';
import Timer from './Timer';
import { useEffect, useState, useRef } from 'react';


const HeaderContainer = styled.div`
`
const Stage = styled.span``
const Time = styled.span``
const Score =styled.span``

export default function Header({stage,second,score, secondHandler}){
    return (
        <HeaderContainer> 
            스테이지 : {stage}, 남은 시간: <Timer secondHandler={secondHandler} stage={stage} score={score}/>, 점수 : {score}
        </HeaderContainer>
    )
}