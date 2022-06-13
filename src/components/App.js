import React from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { useReducer } from 'react'
import {addOne, applyNumber, changeOperation, clearAction} from '../actions'
import reducer from '../reducers'
import { initialState } from '../reducers';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const handleNum = (e) => {
    dispatch(applyNumber(parseInt(e.target.value)))
  }

  const handleOperation = (e) => {
    dispatch(changeOperation(e.target.value))
  }

  const handleClear = () => {
    dispatch(clearAction())
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleNum}/>
              <CalcButton value={2} onClick={handleNum}/>
              <CalcButton value={3} onClick={handleNum}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleNum}/>
              <CalcButton value={5} onClick={handleNum}/>
              <CalcButton value={6} onClick={handleNum}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleNum}/>
              <CalcButton value={8} onClick={handleNum}/>
              <CalcButton value={9} onClick={handleNum}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperation}/>
              <CalcButton value={"*"} onClick={handleOperation}/>
              <CalcButton value={"-"} onClick={handleOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
