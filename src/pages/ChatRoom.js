import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { InputBox } from "../Components/InputBox";
import Contacts from "../Components/Contacts";
import { PopUpScreen } from "../Components/PopUpForUserdetail";

function ChatRoom(){
  const [contact, SetContact] = useState(true);
  const [popup, SetPop ] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user.displayName == null ){
        SetContact(false);
        SetPop(true);
        console.log('popup')
      }
      else{
        SetContact(true)
        console.log('contact')
      }
       // Once auth state is resolved, set isLoading to false
    });

    return unsubscribe;
  }, []);

  return(
 <div className="background">
  
  <Contacts triger={contact} />
  <PopUpScreen triger={popup} />
 </div>
    
  )
 
}
export default ChatRoom;