import { useEffect, useState, useRef } from 'react';
import React from 'react';

export default function Timer ({score, stage}) {
    const [currentSecond, setSecond] = useState(15);
    const time = useRef(15);
    const timerId = useRef(null);
    const lefttime = document.getElementById('stage')
    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setSecond(time.current);
            time.current -=1;
        },1000);
        return ()=>clearInterval(timerId.current);
    },[lefttime]);
    useEffect(()=>{
        if(time.current <=0){
            alert(`GAME OVER! \n스테이지: ${stage}, 점수: ${score}`);
            clearInterval(timerId.current);
        }
    },[currentSecond,stage,score])
    return (<span id='leftsecond'>{currentSecond}</span>)
}