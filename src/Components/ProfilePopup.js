import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import defaultPic from "./DefaultPic.jpg";
export const ProfilePopup = (props) => {
  const [profileImg, setProfileImg] = useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setProfileImg(user.photoURL);

      // Once auth state is resolved, set isLoading to false
    });

    return unsubscribe;
  }, []);

  return props.triger ? (
    <>
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   w-[640px] h-[640px] ">
        <img
          className=" w-[640px] h-[640px]"
          alt="Profile"
          src={profileImg ? profileImg : defaultPic}
        />
      </div>
    </>
  ) : (
    ""
  );
};
