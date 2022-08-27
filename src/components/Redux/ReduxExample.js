import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import {createStore} from 'redux';
import changeTheNumFunc from './Reducers/UpDown'
import {incNum,decNum} from './Actions/index'

function ReduxExample() {
const myState=useSelector((state)=>state.changeTheNumFunc);
const dispatch=useDispatch();
    // redux basics
    // 1)action
    // 2)reducer
    // 3)state

  return (
    // to call action we need dispatch
    <Container>ReduxExample
      <div className="quantity">
        <a onClick={()=>dispatch(incNum())}>+</a>
        <input value={myState} type='text'/>
        <a onClick={()=>dispatch(decNum())}>-</a>
      </div>
    </Container>
  )
}

export default ReduxExample