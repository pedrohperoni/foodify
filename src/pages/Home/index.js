import { useState } from "react";
import Header from "../../components/Header";
import {
  CreateContainer,
  HomeContainer,
  Sidebar,
  TopTrend,
} from "../../components/HomeComponents";
import api from "../../services/api";

export default function Home() {
  const [data, setData] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit() {
    const promise = api.getFoodData({ url: url });
    promise.then((response) => {
      setData(response.data);
    });
    promise.catch((err) => {
      console.log(err);
    });
  }

  console.log(data);

  return (
    <>
      <Header />
      <HomeContainer>
        <Sidebar></Sidebar>
        <CreateContainer>
          <h1>Homepage</h1>
          <input type="text" onChange={(e) => setUrl(e.target.value)}></input>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </CreateContainer>
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
