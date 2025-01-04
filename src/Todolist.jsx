import { useReducer } from "react"

function Todolist() {
const initialState ={
    task:"",
    tasks:[]
}
const [state,dispatch]= useReducer(reducer,initialState)

function reducer(state,action){
switch (action.type){
    case"inputTask":
    return {...state,task:action.payload};
    case"addTask":
    return {...state,tasks: [...state.tasks,{id:Date.now(),taskToDo:state.task}]}
}
}

  return (
    <div>
      <form action="" onSubmit={(e)=>{e.preventDefault();
        dispatch({type:"addTask"})
      }}>
        <input type="text" placeholder="Enter Task" value={state.task} onChange={(e)=>dispatch({type:"inputTask",payload:e.target.value})} />
        <button type="submit">Add Task</button>
      </form>

      <ul> 
        {state.tasks.map((task)=>(
            <li key={task.id}>{task.taskToDo} </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist
