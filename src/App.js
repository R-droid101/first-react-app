import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
// import Home from "./Home"
// import Details from "./Details"
import { useState } from 'react'

// function History(props) {
//   console.log(props);

//   if(props.allClicks.length === 0)
//   return (
//     <div>
//       Get clicking!!!
//     </div>
//   )
//     else
//     return (
//       <div>{props.allClicks}</div>
//     )

// }

// function Button(props) {
//   return (
//     <button onClick={props.handleClick}>
//       {props.text}
//     </button> 
//   )
// }

function Button(props) {
  return (
    <button onClick={props.handler}>{props.text}</button>
  )
}

function StatisticsLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value.toFixed(1)}</td>
    </tr>
  )
}

function Stats(props) {
  let total = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / total;
  if (props.good || props.bad || props.neutral) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          {/* <div>good { props.good }</div>
        <div>neutral { props.neutral }</div>
        <div>bad { props.bad }</div>
        <div>all { total }</div>
        <div>average { average }</div>
        <div>good { props.good / total * 100 } %</div> */}
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="total" value={total} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={props.good / total * 100} />
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}


function App() {
  // return(
  //   <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/">
  //       <Home />
  //     </Route>

  //     <Route path="/:name">
  //       <Details />
  //     </Route>
  //   </Switch>
  //   </BrowserRouter>
  // )

  // const [ counter, setCounter ] = useState(0)

  // const increaseByOne = () => setCounter(counter + 1)
  // const decreaseByOne = () => setCounter(counter - 1)
  // const setToZero = () => setCounter(0)

  // return (
  //   <div>
  //     <Display counter={counter}/>
  //     <Button
  //       onClick={increaseByOne}
  //       text='plus'
  //     />
  //     <Button
  //       onClick={setToZero}
  //       text='zero'
  //     />     
  //     <Button
  //       onClick={decreaseByOne}
  //       text='minus'
  //     />           
  //   </div>
  // )

  // const [leftClick, setLeft] = useState(0);
  // const [allClicks, setAll] = useState([]);
  // const [rightClick, setRight] = useState(0);

  // const handleLeft = () => {
  //   setAll(allClicks.concat('L'));
  //   setLeft(leftClick + 1);
  // }

  // const handleRight = (e) => {
  //   setAll(allClicks.concat('R'));
  //   setRight(rightClick + 1);
  //   console.log(e)
  // }

  // return(
  //   <div>
  //     <Button text="Left" handleClick={handleLeft} />
  //     <Button text="Right" handleClick={handleRight} />
  //     {leftClick} {rightClick}
  //     <History allClicks={allClicks}/>
  //   </div>
  // );

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={handleGood} />
      <Button text="neutral" handler={handleNeutral} />
      <Button text="bad" handler={handleBad} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App