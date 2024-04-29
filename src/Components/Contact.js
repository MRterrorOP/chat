function Contact(props){
  return(
   <button className="bg-gradient-to-br from-opacity-40 to-opacity-10 bg-white bg-opacity-30 
   w-3/4 h-12 pl-2 text-cyan-200 text-left ml-12   backdrop-filter backdrop-blur-lg border
   border-slate-600  rounded-lg shadow-lg mb-3"> {props.name}</button>
  )
}
export default Contact;