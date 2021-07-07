import React,{useState} from 'react'
import './Todo.css'
import { Typography } from "@material-ui/core";
function Todo() {
   const [task, setTask] = useState("")
   const [tasklist,setTasklist]=useState([])
  const handleChange=(e)=>
   {
setTask(e.target.value);
   }
   const AddTask=()=>{
      if(task!== "")
      {
          const taskDetails={
              id:Math.floor(Math.random()*1000),
              value:task,
              isCompleted:false
          }
          setTasklist([...tasklist]);

      }
   }
   const DelTask=(e,id)=>{
  e.preventDefault();
  setTasklist(tasklist.filter((t)=>t.id !=id))
   }
   const EditTask=(e,id)=>{
e.preventDefault();
const element=tasklist.findIndex(elem=>elem.id ==id);
const newTasklist=[...tasklist];
newTasklist[element]={
    ...newTasklist[element],
    isCompleted:true,
}
setTasklist(newTasklist)
}
    return (
        <div className ="todo-par">
       <div className="heading">
       <Typography > TODO LIST</Typography>
      
       </div>   
          <div className="input">
              <input 
              type="text"
              name="text"
              id="text"
              onChange={(e)=> handleChange(e)} />
              <button className="add-btn" onClick={AddTask} >Add</button>
          </div>
          <br/>
          {/* {tasklist !=[]? */}
          <ul>
              {tasklist.map(t=>
                <li>{t.value}
                  <button  className="add-btn" onClick={e=>DelTask(e,t.id)}>Delete</button>
                  <button  className="add-btn" onClick={e=>EditTask(e,t.id)}>Edit</button>
                </li>
              
                )}
          </ul>
          {/* :null} */}
        </div>
    )
}

export default Todo
