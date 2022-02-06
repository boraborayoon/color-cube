import React, { useEffect, useState } from 'react';
import Squares from './components/Squares';
import Timer from './components/Timer';


function App() {
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(15);

  const stageHandler = (currentStage)=>{
    setStage(currentStage)
    const sum= score + ( Math.pow(stage, 3) * second)
    setScore(sum)
  }
  
  const scoreHandler = (currentSec, stage)=>{
    const sum = score + (Math.pow(stage, 3) * currentSec)
    setScore(sum)
  }
  const secondHandler = ()=>{
    setSecond(15)
  }

  useEffect(()=>{
    secondHandler()
  },[stage,score])

  return (
    <div className='App'>
      스테이지: <span id='stage'>{stage}</span>, 남은시간: <Timer stage={stage} score={score} initial={second}/>, 점수: {score}
      <Squares stage={stage} stageHandler={stageHandler} scoreHandler={scoreHandler} secondHandler={secondHandler}/>
    </div>
  )
}

export default App;
