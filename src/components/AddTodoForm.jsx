import { useState } from "react"

function AddTodoForm(props)
{
    const Activityarr = props.Activityarr
    const setActivityarr = props.setActivityarr

    const[newitem,setnewitem] = useState("")

    const handleChange = (event)=>{
        setnewitem(event.target.value)
    }

    const additem = ()=>
    {
          setActivityarr([...Activityarr,{id:Activityarr.length+1,activity:newitem}])
          setnewitem("")
    }
    return(
            <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activity</h1>

         <div>
            <input type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" value={newitem} onChange={handleChange}></input>
            <button className="bg-black text-white p-1 border border-black" onClick={additem}>Add</button>
        </div>
        </div>
    )
}

export default AddTodoForm