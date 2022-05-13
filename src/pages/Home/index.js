import { useState } from "react";
import api from "../../services/api";

export default function Home() {
  const [data, setData] = useState("");
  const [url, setUrl] = useState("")


  function handleSubmit() {
    const promise = api.getFoodData({url: url})
    promise.then((response) => {setData(response.data)})
    promise.catch((err) => {
       console.log(err)
    })
  };

  console.log(data);

  return (
    <>
      <h1>Homepage</h1>
      <input type="text" onChange={(e) => setUrl(e.target.value)}></input>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </>
  );
}
