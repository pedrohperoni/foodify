import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #232325;
  width: 100%;
  border-radius: 10px;
  padding: 10px 0 20px 0;
  color: var(--white);

  img {
    margin: 10px 0;
    width: auto;
    max-width: 100%;
    max-height: 400px;
    border-radius: 10px;
  }

  strong{
     color: rgba(32, 195, 161, 1);
     font-weight: 500;
  }

  p {
    font-weight: bold;
    margin: 15px 0 5px 0;
  }

  span {
    font-weight: normal;
  }

  h1 {
    margin-top: 20px;
    font-size: 1.5em;
  }
`;

export default Container