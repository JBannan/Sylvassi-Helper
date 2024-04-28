import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

const TOTAL_AREA = [800, 800];
const CENTER = [TOTAL_AREA[0]/2, TOTAL_AREA[1]/2];
const RADIUS = 50;
const CORE = RADIUS / 2;
const CIRCLE_OFFSET = CENTER[0] - CORE;
const LINE_OFFSET = CENTER[1] + CORE;

// M ${CENTER[0]},${CENTER[1]} 
//               a 50 50 5 1 0 1,1 L ${CENTER[0] + 25},${CENTER[1] - 25}
function App() {
  const [bigRot, setBigRot] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" onClick={() => {}}/> */}
        <svg width={800} height={800} className="svg-top">
          <g fill="grey" stroke="cyan" strokeWidth={3}>
            <path d={`
              M ${CENTER[0] - CORE * 5},${CENTER[1]}
              a ${CORE * 5},${CORE * 5} 0 1,1 ${RADIUS * 6},0
              a ${CORE * 5},${CORE * 5} 0 1,1 -${RADIUS * 6},0
              M ${CENTER[0] + CORE},${CENTER[1] + CORE * 5} v ${CORE}
            `}
            onClick={() => {console.log('1')}}/>
            <path d={`
              M ${CENTER[0] - CORE * 4},${CENTER[1]}
              a ${CORE * 4},${CORE * 4} 0 1,1 ${RADIUS * 5},0
              a ${CORE * 4},${CORE * 4} 0 1,1 -${RADIUS * 5},0
              M ${CENTER[0] + CORE},${CENTER[1] + CORE * 4} v ${CORE}
            `}
            onClick={() => {console.log('2')}}/>

            <path d={`
              M ${CENTER[0] - CORE * 3},${CENTER[1]}
              a ${CORE * 3},${CORE * 3} 0 1,1 ${RADIUS * 4},0
              a ${CORE * 3},${CORE * 3} 0 1,1 -${RADIUS * 4},0
              M ${CENTER[0] + CORE},${CENTER[1] + CORE * 3} v ${CORE}
            `}
            onClick={() => {console.log('3')}}/>
            <path d={`
              M ${CENTER[0] - CORE * 2},${CENTER[1]}
              a ${CORE * 2},${CORE * 2} 0 1,1 ${RADIUS * 3},0
              a ${CORE * 2},${CORE * 2} 0 1,1 -${RADIUS * 3},0
              M ${CENTER[0] + CORE},${CENTER[1] + CORE * 2} v ${CORE}
            `}
            onClick={() => {console.log('4')}}/>
            <path d={`
              M ${CENTER[0] - CORE},${CENTER[1]}
              a ${CORE},${CORE} 0 1,1 ${RADIUS * 2},0
              a ${CORE},${CORE} 0 1,1 -${RADIUS * 2},0
              M ${CENTER[0] + CORE},${CENTER[1] + CORE} v ${CORE}
            `}
            onClick={() => {console.log('5')}}/>

            <path d={`
              M ${CENTER[0]},${CENTER[1]}
              a ${RADIUS/2},${RADIUS/2} 0 1,1 ${RADIUS},0
              a ${RADIUS/2},${RADIUS/2} 0 1,1 -${RADIUS},0
              M ${CENTER[0] + RADIUS/2},${CENTER[1]} v ${CORE}
            `}
            onClick={() => {console.log('Center - 6')}}/>


            {/* <circle cx={50} cy={50} r={10} azimuth={10}/> */}
            
            {/* <circle cx={CENTER[0]} cy={CENTER[1]} r="100" pathLength={50}  onClick={() => {console.log('test bigger')}}/>
            <g rotate={0}>
              <line x1={CENTER[0]} y1={CENTER[1]} x2={CENTER[0] + 100} y2={CENTER[1]}/>
            </g>
            <circle cx={CENTER[0]} cy={CENTER[1]} r="50"  onClick={() => {console.log('test')}}/> */}
            {/* <circle cx={CENTER[0]} cy={CENTER[1]} r="100" pathLength={50}/> */}
          </g>
        </svg>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
