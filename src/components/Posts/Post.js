import styled from "styled-components";

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background-color: #232325;
  border-radius: 10px;
  color: var(--white);
  margin-bottom: 10px;

  div {
    width: 100%;
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 1.6em;
    font-weight: 600;
    font-family: "Roboto", sans-serif;
    margin-bottom: 5px;
    word-break: break-word;
  }

  h2 {
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 5px;
    color: rgba(32, 195, 161, 1);
  }

  img {
     max-height:400px;
    max-width: 100%;
    border-radius: 10px;
  }

  span{
     width: 100%;
     padding: 10px;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     gap: 5px;
  }
`;

export default Post;
