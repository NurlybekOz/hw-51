import './App.css'
import Ball from './companents/ball/ball.tsx';
import {useState} from "react";

const App = () => {
  const [balls, setBalls] = useState<number[]>([5, 11, 16, 23, 32]);

  const RandomGenerate = () => {
  const copyBalls = [...balls];
  copyBalls[0] = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  copyBalls[1] = Math.floor(Math.random() * (11 - 6 + 1) + 6);
  copyBalls[2] = Math.floor(Math.random() * (16 - 12 + 1) + 12);
  copyBalls[3] = Math.floor(Math.random() * (23 - 17 + 1) + 17);
  copyBalls[4] = Math.floor(Math.random() * (32 - 24 + 1) + 24);
  setBalls(copyBalls)
  }
  const BallsArray = () => {
    return (
        <>
            <div className="Balls">
            <Ball count={balls[0]}/>
            <Ball count={balls[1]}/>
            <Ball count={balls[2]}/>
            <Ball count={balls[3]}/>
            <Ball count={balls[4]}/>
            </div>
        </>
    )
  }
  return (
    <>
        <BallsArray></BallsArray>
      <button onClick={RandomGenerate}>New numbers</button>
    </>
  )
};

export default App
