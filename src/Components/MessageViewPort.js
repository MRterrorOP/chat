import { useEffect, useState } from "react";
import { database } from "../utils/firebase";
import { ref, push, set, onValue } from "firebase/database";
import Message from "./Message";

export const MessageViewPort = (props) => {
  const { triger, userUID, userPhotoUrl, userName } = props;

  const [IsMessageChange, setIsMessageChange] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const starCountRef = ref(database, "messages");
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // here we convert fetch data to a list so we can apply map function on it
      let arrayData = Object.keys(data).map((key) => {
        return [key, data[key]];
      });

      const ActualMessages = [];
      for (let i = 0; i < arrayData.length - 6; i++) {
        ActualMessages.push(arrayData[i]);
      }
      console.log(ActualMessages);
      setMessages(ActualMessages);
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, [IsMessageChange]);

  const SentMessageToDb = () => {
    const currentDate = new Date();
    // Get the current hour, minute, and second
    const dd = currentDate.getDate();
    const mm = currentDate.getMonth() + 1;
    const yy = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const Minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    // Format the current time
    const formattedDate = `${dd}:${mm}:${yy}`;
    const formattedTime = `${hour}:${Minute}:${second}`;

    let messageData = {
      date: formattedDate,
      message: inputValue,
      userPhotoUrl: userPhotoUrl,
      sender: userUID,
      time: formattedTime,
      userName: userName,
    };
    var newMessageRef = push(ref(database, "messages"));
    set(newMessageRef, messageData)
      .then(() => {
        setIsMessageChange(!IsMessageChange);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return triger ? (
    <div
      className="absolute top-[10%] justify-center  items-center flex flex-col  left-1/4 bg-white bg-gradient-to-br from-opacity-10 to-opacity-10 bg-opacity-10 w-3/4 h-[90%] backdrop-filter content-center backdrop-blur-[2px] border
      border-slate-600/20  rounded-lg shadow-lg"
    >
      <div className="w-[98%] mt-1   h-[80vh] rounded ">
        {Array.isArray(messages) &&
          messages.map((element) => (
            <Message
              key={element[0]}
              userPhotoUrl={element[1].userPhotoUrl}
              message={element[1].message}
              time={element[1].time}
              userName={element[1].userName}
            />
          ))}
      </div>
      <div className="w-[98%] rounded-md flex  bg-gray-300/15 h-[10%] mt-2">
        <input
          className="w-[90%]  ml-[1%]    bg-gray-200 h-[80%] mt-2 "
          placeholder="Enter Your Message.."
          name="message"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Enter is clicked");
              SentMessageToDb();
              setInputValue("");
            }
          }}
        ></input>
        <button
          className="rounded-full ml-[1%] h-[80%]  bg-green-500 m-1 text-black"
          type="submit"
          onClick={SentMessageToDb}
        >
          Send
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
