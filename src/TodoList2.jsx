import { useReducer } from 'react'


function TodoList2() {
    const initialState={
        task:"",
        Tasks:[]
    }
    const [state , dispatch]=useReducer(reducer, initialState)
    
    function reducer(state, action ){
      if (action==="inputTask")return{...state , task:action.payload};
      else if(action==="addTask")return{...state,Tasks:[...state.task,{id:Date.now(),tasktodo:state.task}]}
    }
  return (
    <div>
      <form action="" onClick={(e)=>{e.preventDefault();
        dispatch({type:"addTask"}) }}>
        <input type="text" value={state.task} onChange={(e)=>dispatch({type:"inputTask" , payload:e.target.value})} />
        <button  type='submit'>Click me </button>
      </form>

      <ul>
{/* {state.tasks.map((task)=>(<li key={task.id}>{task.tasktodo} </li>))} */}
{state.tasks.map((task)=>(<li key={task.id}>{task.taskToDo} </li>))}
      </ul>
    </div>
  )
}

export default TodoList2
