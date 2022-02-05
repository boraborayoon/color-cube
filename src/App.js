import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Squares from './components/Squares';


function App() {
  const [stage,setStage] = useState(1);
  const [correct,setCorrect] = useState('');
  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(15);

  const stageHandler = (currentStage)=>{
    setStage(currentStage)
  }
  const secondHandler = (currentSecond)=>{
    setSecond(currentSecond)
  }
  function Timer(){
    const time = useRef(15);
    const timerId = useRef(null);
    useEffect(()=>{
        timerId.current = setInterval(()=>{
          setSecond(time.current);
          time.current -=1;
        },1000)
    
      return ()=>clearInterval(timerId.current);
    },[])
    useEffect(()=>{
      if(time.current<=0){
        alert(`GAME OVER! \n 스테이지:${stage}, 스코어:${score} `);
        clearInterval(timerId.current);
      }
    },[second])
  }
  useEffect(()=>{
    const sum= score + ( Math.pow(stage, 3) * second)
    setScore(sum)
    
  },[stage,correct])

  useEffect(()=>{
    setScore(0)
  },[])

  return (
    <div className='App'>
      스테이지: {stage},남은시간: {second}, 점수: {score}
      <Squares stage={stage} stageHandler={stageHandler} setCorrect={setCorrect} />
    </div>
  )
}

export default App;
