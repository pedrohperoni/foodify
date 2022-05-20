import { useEffect } from "react";
import useAuth from "../../hooks/useAuth.js";
import api from "../../services/api.js";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import {
  MainContainer,
  HomeContainer,
  Sidebar,
  TopTrend,
  CreateContainer,
} from "../../components/HomeComponents";
import Posts from "../../components/Posts/index.js";


export default function Home() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
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
          <CreateContainer />
          <Posts />
        </MainContainer>
        <Sidebar>
          <TopTrend>
            <img
              src=""
              alt="top trend img"
            />
            <p>#1 tag</p>
            <span>#2 tag</span>
            <span>#3 tag</span>
          </TopTrend>
        </Sidebar>
      </HomeContainer>
    </>
  );
}
