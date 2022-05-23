import { Sidebar } from "../GlobalComponents";
import useAuth from "../../hooks/useAuth";
import UserContainer from "./UserContainer";
import Background from "./Background";
import ProfilePhoto from "./ProfilePhoto";
import FollowContainer from "./FollowContainer";

export default function UserSidebar() {
  const { user } = useAuth();
  return (
    <Sidebar>
      {user && (
        <UserContainer>
          <Background>
            <img src={user.backgroundUrl} alt="Background" />
          </Background>
          <ProfilePhoto src={user.profileUrl} alt="user" />
          <h1>{user.name}</h1>
          <span>@{user.name.replace(' ', "_")}</span>
          <p>
            Entrepreneur. Food practitioner. Student. Travel nerd. Social media
            aficionado.
          </p>
          <FollowContainer>
            <p>
              <strong>532</strong> following
            </p>
            <span></span>
            <p>
              <strong>9,991</strong> followers
            </p>
          </FollowContainer>
        </UserContainer>
      )}
    </Sidebar>
  );
}
