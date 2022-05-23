import { Sidebar } from "../GlobalComponents";
import useAuth from "../../hooks/useAuth";
import UserContainer from "./UserContainer";
import Background from "./Background";
import ProfilePhoto from "./ProfilePhoto";
import { References } from "./References";
import clarifai from "../../assets/clarifai.png";
import prisma from "../../assets/prisma.png";
import unsplash from "../../assets/unsplash.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import typescript from "../../assets/typescript.png";

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
          <span>@{user.name}</span>
          <p>dapibusdapibusdapibusdapibusdapibusdapibusdapibus</p>{" "}
        </UserContainer>
      )}
      <References>
        <h1>This project is powered by</h1>
        <a
          href="https://docs.clarifai.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={clarifai} alt="Clarifai" />
        </a>
        <a
          href="https://unsplash.com/documentation"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={unsplash} alt="Unsplash" />
        </a>
        <a
          href="https://reactjs.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={react} alt="React" />
        </a>
        <a
          href="https://nodejs.org/en/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={nodejs} alt="NodeJs" />
        </a>
        <a
          href="https://www.prisma.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={prisma} alt="Prisma" />
        </a>

        <a
          href="https://www.typescriptlang.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={typescript} alt="Typescript" />
        </a>
      </References>
    </Sidebar>
  );
}
