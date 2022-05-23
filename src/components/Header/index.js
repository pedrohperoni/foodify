import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import HeaderContainer from "./HeaderContainer";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import StyledText from "./StyledText";
import HeaderUser from "./HeaderUser";
// import clarifai from "../../assets/clarifai.png";
// import prisma from "../../assets/prisma.png";
// import unsplash from "../../assets/unsplash.png";
// import react from "../../assets/react.png";
// import nodejs from "../../assets/nodejs.png";
// import typescript from "../../assets/typescript.png";

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
          <h1>FOODIFY</h1>
        </Link>
      </div>

      <div>
        {user ? (
          <>
            <HeaderUser>
              <Link to={`/settings/account/${user.userId}`}>
                <img src={user.profileUrl} alt="user" />
              </Link>
              <p>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
            </HeaderUser>

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
