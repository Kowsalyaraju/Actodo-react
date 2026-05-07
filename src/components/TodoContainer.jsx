import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import AddTodoList from "./AddTodoList"
function TodoContainer()
{
    const[Activityarr,setActivityarr] = useState([
        {
        id:1,
        activity:"Wake Up at 6am"
        },
        {
            id:2,
            activity:"Go For a Walk"
        },
        {
            id:3,
            activity:"Take a Shower"
        }
])
    return(
        <div>

       
        <div className="flex gap-5 flex-wrap">
  <AddTodoForm 
    Activityarr={Activityarr} 
    setActivityarr={setActivityarr}
  />

  <AddTodoList 
    Activityarr={Activityarr} 
    setActivityarr={setActivityarr}
  />
</div>
      
       
      </div>
    )
}

export default TodoContainer


