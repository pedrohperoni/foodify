import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import HeaderContainer from "./HeaderContainer";
import { IoLogOutOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import StyledText from "./StyledText";


export default function Header({ page }) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }
  return (
    <HeaderContainer>
      <div>
        <span />
        <Link to="/">
          <p>FOODIFY</p>
        </Link>
      </div>

      <div>
        {user !== undefined ? (
          <>
          <p>{user.name}</p>
            <Link to={`/settings/account/${user.userId}`}>
              <BiUser color="white" size="1.5em" />
            </Link>

            <Link onClick={() => handleLogout()} to="/login">
              <IoLogOutOutline color="white" size="1.7em" />
            </Link>

          </>
        ) : (
          <>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/login">
              <p>Login</p>
            </Link>
            <Link to="/signup">
            <StyledText color="cyan">SignUp</StyledText>
            </Link>
          </>
        )}
      </div>
    </HeaderContainer>
  );
}
