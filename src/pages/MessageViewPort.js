export const MessageViewPort = (props) => {
  return props.triger ? (
    <div
      className="absolute top-[10%] justify-center  items-center flex flex-col  left-1/4 bg-white bg-gradient-to-br from-opacity-10 to-opacity-10 bg-opacity-10 w-3/4 h-[90%] backdrop-filter content-center backdrop-blur-[2px] border
      border-slate-600/20  rounded-lg shadow-lg"
    >
      <div className="w-[98%] mt-1   h-[80vh] rounded "></div>
      <div className="w-[98%] rounded-md flex  bg-gray-300/15 h-[10%] mt-2">
        <input
          className="w-[90%]  ml-[1%]    bg-gray-200 h-[80%] mt-2 "
          placeholder="Enter Your Message.."
        ></input>
        <button
          className="rounded-full ml-[1%] h-[80%]  bg-green-500 m-1 text-black"
          type="submit"
        >
          Send
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};
