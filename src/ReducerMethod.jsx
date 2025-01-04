import React from 'react'
import { useReducer } from 'react'

const initialState={count:0}

function reducing(state, action){
    switch(action.type){
        case"increment":
        return {count:state.count+1};

        case"decrement":
        return {count:state.count+1}

        default : throw new Error();
        
    }
    


}

function ReducerMethod() {
   const [state , dispatch]= useReducer(reducing,initialState)


  return (
    <div>
        Count:{state.count}
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>


    </div>
  )
}

export default ReducerMethod
