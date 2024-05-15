import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { MessageViewPort } from "../Components/MessageViewPort";
import Contacts from "../Components/Contacts";
import { PopUpScreen } from "../Components/PopUpForUserdetail";
import NavBar from "../Components/NavBar";
import { ProfilePopup } from "../Components/ProfilePopup";
function ChatRoom() {
  const [MessageView, SetMessageView] = useState(false);
  const [Profilimg, setProfileImg] = useState("");
  const [contact, SetContact] = useState(true);
  const [popup, SetPop] = useState(false);
  const [navbar, SetNavBar] = useState(false);
  const [trigerPopup, setTrigerPopup] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [userUID, setUserUID] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setProfileImg(user.photoURL);
      setDisplayName(user.displayName);
      setUserUID(user.uid);

      if (user.displayName == null) {
        SetContact(false);
        SetNavBar(false);
        SetMessageView(false);
        SetPop(true);

        console.log("popup");
      } else {
        SetContact(true);
        SetNavBar(true);
        SetMessageView(true);
        console.log("contact");
      }
      // Once auth state is resolved, set isLoading to false
    });

    return unsubscribe;
  }, []);
  const handlePopUP = () => {
    console.log("handlePopUp");
    setTrigerPopup(!trigerPopup);
  };

  return (
    <div className="background">
      <Contacts triger={contact} />
      <PopUpScreen triger={popup} />
      <NavBar trigerProfile={handlePopUP} triger={navbar} />
      <ProfilePopup triger={trigerPopup} />
      <MessageViewPort
        triger={MessageView}
        userUID={userUID}
        userPhotoUrl={Profilimg}
        userName={displayName}
      />
    </div>
  );
}
export default ChatRoom;
