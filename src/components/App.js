import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer ,{ initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, memoryDisplay, memoryAdd, memoryClear } from '../actions/index';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleClick = () => {
  //   dispatch(addOne());
  // }

  const eventHandler = (input) =>{
    // console.log(input)
    dispatch(applyNumber(parseInt(input.target.value)));
  }

  const handleOperator = (input) => {
    // console.log(input)
    dispatch(changeOperation(input.target.value));
  }

  const clear = () => {
    dispatch(clearDisplay());
  }

  const handleMemory = () => {
    dispatch(memoryDisplay());
  }

  const addMemory = () => {
    dispatch(memoryAdd());
  }

  const clearMemory = () => {
    dispatch(memoryClear());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory}/>
              <CalcButton value={"MR"} onClick={addMemory}/>
              <CalcButton value={"MC"} onClick={clearMemory}/>
            </div>

            <div className="row">
              {/* <CalcButton value={1} onClick={handleClick}/> */}
              <CalcButton value={1} onClick={eventHandler}/>
              <CalcButton value={2} onClick={eventHandler}/>
              <CalcButton value={3} onClick={eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventHandler}/>
              <CalcButton value={5} onClick={eventHandler}/>
              <CalcButton value={6} onClick={eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventHandler}/>
              <CalcButton value={8} onClick={eventHandler}/>
              <CalcButton value={9} onClick={eventHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperator}/>
              <CalcButton value={"*"} onClick={handleOperator}/>
              <CalcButton value={"-"} onClick={handleOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
