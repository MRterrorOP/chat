import { useState, useEffect } from "react";
import Userlist  from "./Userlist";
import Contact from "./Contact";
import '../../src/index.css'
function Contacts(props  ){
  const [list , setList] = useState(Userlist);
  
  const filterUser = (event) =>{ 
    const people = Userlist.filter((user =>{
      if (user.name.toLowerCase().includes(event.target.value.toLowerCase())){
        return user
      }
      
    }))
    return setList(people);

     
  } 
  return( props.triger ?
   <div className="bg-gradient-to-br from-opacity-10 to-opacity-10 bg-white bg-opacity-10 
   w-1/4 h-screen backdrop-filter content-center backdrop-blur-lg border
   border-slate-600  rounded-lg shadow-lg ">
    <input className="focus:ring focus:ring-blue-300 placeholder:text-black text-slate-700 m-3 ml-9 from-inherit pl-12 outline-none" placeholder="Search your Contact" onChange={filterUser
    }/>
      <div className="overflow-x-auto">
        {list.map(user => ( 
            <Contact key={user.id} name={user.name} />
          ))} 
      </div>
   </div>
   : ''

  )
}

export default Contacts;