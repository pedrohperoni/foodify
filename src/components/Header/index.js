import HeaderContainer from "./HeaderContainer";
import { IoLogOutOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
  function handleLogout() {
    console.log("la");
  }

  return (
    <HeaderContainer>
      <div>
        <span />
        <Link to="/">
          <p>OBJECTIFY</p>
        </Link>
      </div>

      <div>
        <Link to="/settings/account">
          <BiUser color="white" size="1.5em" />
        </Link>
        <Link onClick={() => handleLogout()} to="/login">
          <IoLogOutOutline color="white" size="1.7em" />
        </Link>
      </div>
    </HeaderContainer>
  );
}
