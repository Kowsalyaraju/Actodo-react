

import Login from "./Pages/Login";
import Signup from "./Pages/Sign Up";
import Landing from "./Pages/Landing";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App()
{

  const[users,setusers] = useState(
        [
            {
                username:"Kowsi",
                password:"@123"
            }
        ]
    )
    return(
      <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path="/signup" element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path="/landing" element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
    )
  
}


export default App;
