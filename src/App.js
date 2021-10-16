import React, { useState } from 'react'
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(time);
  const [color, setColor] = useState();

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    let seconds = new Date().getSeconds();

    if (seconds % 2 === 0) {
      setColor('black');
    } else {
      setColor('white');
    }

    setCTime(time);
  };
  setInterval(UpdateTime, 1000);

  return (
    <>
      <div style={{ backgroundColor: color, textAlign: "center" }}>
        <div style={{ height: "1000px", paddingTop: "180px", paddingRight: "80px" }} >
          <div style={{ backgroundColor: "blue", width: "400px", height: "400px", marginLeft: "545px", textAlign: "center" }}>
            <h2 style={{ fontSize: "50px", textAlign: "center", color: "red" }}>Current Time</h2>
            <h1 style={{ fontSize: "70px", textAlign: "center", paddingTop: "150px" }}>{cTime}</h1>
          </div>
        </div>
      </div>

      </>
      
      );
}

      export default App;
