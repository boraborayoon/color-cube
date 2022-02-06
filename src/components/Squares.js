import styled from 'styled-components';
import Timer from './Timer';

const SquareContainer = styled.div`
display: flex;
flex-wrap : wrap;
// border: 1px solid red;
justify-content: space-around;
width: 390px;
height: 390px;

`
const SquareRow = styled.div`
background-color : blue;
margin: 1px;
`
function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+ min;
}

export default function Squares({stage, stageHandler,setCorrect}){
    let toShows=[];
    const currentStage=stage || 7;

    const squares = Math.pow(Math.round((currentStage + 0.5) / 2) + 1, 2)
    for(let i=0;i<squares;i++){
        toShows.push([i]);
    }
    const width = Math.floor(370 / squares ** 0.5) + 'px';

    const differentIdx=randomNum(0,squares-1)
    const randomColor= [randomNum(50,255),randomNum(50,255),randomNum(50,255)]
    const differentSqaure = randomColor.map((color,idx)=>{
        return Math.floor(color * (1- 1/stage))
    })
    const normalColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    const differentColor = `rgb(${differentSqaure[0]}, ${differentSqaure[1]}, ${differentSqaure[2]},${(1- 1/stage)})`;
    
    const spotHandler =()=>{
        setCorrect(true)
        stageHandler(currentStage+1)
    }

    return (<SquareContainer>
        {toShows.map((item,idx)=>  (
            <>
            {idx !== differentIdx? 
        <SquareRow key={idx} style={{backgroundColor: `${normalColor}`, width:`${width}`, height:`${width}`}}></SquareRow> 
        : 
        <SquareRow key={idx} style={{backgroundColor: `${differentColor}`, width:`${width}`, height:`${width}`}} onClick={spotHandler}></SquareRow> 
            }
        </> ))}
        </SquareContainer>)
}