export default function Contact( props ){
  return(
    <div  className="w-11/12 pl-2 flex relative items-center bg-blue-400 bg-opacity-20  rounded-lg rounded h-16 m-2">
      <img src={props.imagePath}   className="rounded-full w-12 h-12 ma-0.5  "   alt="profile"/>
      <p className="absolute left-16 top-3"> {props.profileName}</p>
      {console.log(props.profileName)}
    </div>
  )
}