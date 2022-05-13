import { useState } from "react";

const test = 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'

export default function Home() {
  const [data, setData] = useState("");


  const handleSubmit = () => {
    
  };

  console.log(data);

  return (
    <>
      <h1>Homepage</h1>
      <img id="image" src={test} alt="test" />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </>
  );
}
