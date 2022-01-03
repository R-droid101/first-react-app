import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
// import Home from "./Home"
// import Details from "./Details"
import { useState } from 'react'

function History(props) {
  console.log(props);

  if(props.allClicks.length === 0)
  return (
    <div>
      Get clicking!!!
    </div>
  )
    else
    return (
      <div>{props.allClicks}</div>
    )
 
}

function Button(props) {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button> 
  )
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

  const [leftClick, setLeft] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [rightClick, setRight] = useState(0);

  const handleLeft = () => {
    setAll(allClicks.concat('L'));
    setLeft(leftClick + 1);
  }

  const handleRight = (e) => {
    setAll(allClicks.concat('R'));
    setRight(rightClick + 1);
    console.log(e)
  }
  
  return(
    <div>
      <Button text="Left" handleClick={handleLeft} />
      <Button text="Right" handleClick={handleRight} />
      {leftClick} {rightClick}
      <History allClicks={allClicks}/>
    </div>
  );
}

export default App