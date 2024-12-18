import './App.css'
import Ball from './companents/ball/ball.tsx';
import {useState} from "react";

const App = () => {
  const [balls, setBalls] = useState([
    {count: 5},
    {count: 11},
    {count: 16},
    {count: 23},
    {count: 32}
  ]);

  const RandomGenerate = () => {
  const copyBalls = [...balls];
  const copyBall1 = {...copyBalls[0]};
  const copyBall2 = {...copyBalls[1]};
  const copyBall3 = {...copyBalls[2]};
  const copyBall4 = {...copyBalls[3]};
  const copyBall5 = {...copyBalls[4]};
  copyBall1.count = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  copyBall2.count = Math.floor(Math.random() * (11 - 5 + 1) + 5);
    copyBall3.count = Math.floor(Math.random() * (16 - 11 + 1) + 11);
    copyBall4.count = Math.floor(Math.random() * (23 - 16 + 1) + 16);
    copyBall5.count = Math.floor(Math.random() * (32 - 23 + 1) + 23);
  copyBalls[0] = copyBall1;
    copyBalls[1] = copyBall2;
    copyBalls[2] = copyBall3;
    copyBalls[3] = copyBall4;
    copyBalls[4] = copyBall5;
    setBalls(copyBalls)
  }
  const BallsArray = () => {
    return (
        <>
            <div className="Balls">
            <Ball count={balls[0].count}/>
            <Ball count={balls[1].count}/>
            <Ball count={balls[2].count}/>
            <Ball count={balls[3].count}/>
            <Ball count={balls[4].count}/>
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
