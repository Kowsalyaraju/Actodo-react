function Todoitem(props)
{
    const Activityarr = props.Activityarr
    const setActivityarr = props.setActivityarr

    const handleDelete =(removeid)=>
{
       var newarr = Activityarr.filter(function(item)
    {
        if(item.id==removeid)
        {
            return false
        }
        else
        {
            return true
        }

    })
    setActivityarr(newarr)
}
    return(
        <div className="flex justify-between">
            <p>{props.index+1} . {props.item.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default Todoitem