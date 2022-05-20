import Header from "../../components/Header";
import {
  MainContainer,
  HomeContainer,
  Sidebar,
  TopTrend,
  CreateContainer,
} from "../../components/HomeComponents";

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Sidebar />
        <MainContainer>
          <CreateContainer />
        </MainContainer>
        <Sidebar>
          <TopTrend>
            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="salmon"
            />
            <p>Salmon</p>
          </TopTrend>
        </Sidebar>
      </HomeContainer>
    </>
  );
}
