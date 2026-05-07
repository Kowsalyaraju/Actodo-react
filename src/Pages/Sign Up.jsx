import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props)
{
    const users = props.users
    const setusers = props.setusers

    const Navigate = useNavigate()

    const[eusername,seteusername] = useState("")
    const[epassword,setepassword] = useState("")

      function handleUInput(event)
    {
          seteusername(event.target.value)
    }

    function handleUPassword(event)
    {
        setepassword(event.target.value)
    }

    function addUser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        Navigate("/")
    }


    return(
        <div className="bg-black p-10 ">
           <div className="bg-white p-10 border rounded-md ">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>Sign Up here</p>

            <div className="flex flex-col gap-2 my-2">
                <input type="text" value={eusername}
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Username"
                onChange={handleUInput}/>

                <input type="text" value={epassword}
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Password"
                onChange={handleUPassword}/>

                <input type="text" 
                className="w-52 border-black p-1 bg-transparent border rounded-md" 
                placeholder="Confirm Password"/>

                <button className="bg-orange-400 w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>

                <p>Already have an account? <Link to="/" className="underline">Login</Link></p>

            </div>

           </div>
        </div>
    )
}



export default Signup