
import Todoitem from "./Todoitem"

function AddTodoList(props)
{
    
    const Activityarr = props.Activityarr
    const setActivityarr = props.setActivityarr
    return(
         <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Todays Activity</h1>
             {
                Activityarr.length===0? <p>You Haven't add anything yet</p>:""
             }
            {
                Activityarr.map(function(item,index)
            {
                return(
                    <Todoitem id={item.id} item={item} index={index} Activityarr={Activityarr} setActivityarr={setActivityarr}/>
                )
            })
            }
        </div>
    )
}

export default AddTodoList