import { useState } from "react"
import { useLocation } from "react-router-dom"

import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"

function Landing()
{

    const data = useLocation()


   return(
    <div className="bg-black p-14 ">
       <div className="bg-[#EFEFEF] p-10 border rounded-md">
   
         {/*Header*/}
   
         <Header name={data.state.user}/>
   
         {/*Card*/}
   
         <div className="flex gap-7 my-5 flex-wrap">
           <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
           <Card bgcolor={"#FD6663"} title={"May"} subtitle={"12:08:34"}/>
           <Card bgcolor={"#FCA201"} title={"Bulit Using"} subtitle={"React"}/>
         </div>
   
         {/*TodoConatiner*/}
         
         <TodoContainer/>
   
   
       </div>
      </div>
   )
}

export default Landing