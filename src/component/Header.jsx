import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Hero from "./Hero";
function Header() {
  return (
    <>
      <div className="flex justify-between text-gray-900 items-center">
        <ul className="flex  justify-between items-center text-xl p-4">
          <Link to="/">
            <li className="mx-2">Home </li>
          </Link>
          <Link to="/About">
            <li className="mx-2">About </li>
          </Link>
          <Link to="/Contact">
            <li className="mx-2">Contact </li>
          </Link>
        </ul>

        <div className="flex justify-center gap-4 p-2 bg-none text-2xl text-blue-600">
          <BsFillPersonFill />
          <Link to="/login">
            <button>Login </button>
          </Link>
          <Link to="/sign-up">
            <button>Sign-Up </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
