import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const locatin = useLocation();
  let from = locatin.state?.from?.pathname || "/chatroom";
  async function handlesignout() {
    signOut(auth)
      .then(() => {
        navigate("/authentication");
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <div>
      <h1>welcome</h1>
      <Link to="/chatroom">
        <button>Go to chatroom</button>
      </Link>
      <button onClick={handlesignout}> Sign Out?</button>
    </div>
  );
};
export default Homepage;
