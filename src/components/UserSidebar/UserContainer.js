import styled from "styled-components";

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  background-color: #232325;
  border-radius: 10px;
  color: var(--white);
  position: relative;

  h1 {
    font-size: 1.3em;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    color: var(--white);
  }

  span {
    color: var(--light-gray);
    font-size: 0.9em;
    font-weight: 500;
  }

  p {
    padding: 0 15px;
    color: var(--white);
    font-size: 0.9em;
    font-family: "Poppins", sans-serif;
    text-align: center;
    word-break: break-word;
  }

  @media(max-width: 1200px){
   gap: 5px;
  }
`;

export default UserContainer;
