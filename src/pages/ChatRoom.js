import React from "react";
import { InputBox } from "../Components/InputBox";
import Contacts from "../Components/Contacts";

import zoroImage from '../Components/zoro.jpeg';
import { Database } from "firebase/database";
function ChatRoom(){
  
  return(
 <div className="background">
  <Contacts />
  
 </div>
    
  )
 
}
export default ChatRoom;