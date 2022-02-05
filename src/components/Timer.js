import { useEffect, useState, useRef } from 'react';


export default function Timer () {
    const [currentSecond, setSecond] = useState(15);
    const time = useRef(15);
    const timerId = useRef(null);
    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setSecond(time.current);
            time.current -=1;
        },1000);
        return ()=>clearInterval(timerId.current);
    },[]);
    useEffect(()=>{
        if(time.current <=0){
            alert(`GAME OVER!`);
            clearInterval(timerId.current);
        }
    },[currentSecond])
    return (<span>{currentSecond}</span>)
}