import { useEffect } from "react";
import useAuth from "../../hooks/useAuth.js";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import {
  MainContainer,
  HomeContainer,
  Sidebar,
} from "../../components/GlobalComponents";
import Posts from "../../components/Posts/index.js";
import CreatePost from "../../components/CreatePost/index.js";
import TopTagsSidebar from "../../components/TopTagsSidebar/index.js";

export default function Home() {
  const { auth, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    api
      .validateJWT(auth)
      .then((response) => {})
      .catch((err) => {
        navigate("/login");
      });
  }, [auth, navigate]);

  return (
    <>
      <Header />
      <HomeContainer>
        <Sidebar />
        <MainContainer>
          <CreatePost />
          <Posts />
        </MainContainer>
        <TopTagsSidebar />
      </HomeContainer>
    </>
  );
}
