import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
// import Home from "./Home"
// import Details from "./Details"
import { useState } from 'react'



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

  const handleRight = () => {
    setAll(allClicks.concat('R'));
    setRight(rightClick + 1);
  }
  
  return(
    <div>
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      {leftClick} {rightClick}
      <p>{allClicks}</p>
    </div>
  );
}

export default App