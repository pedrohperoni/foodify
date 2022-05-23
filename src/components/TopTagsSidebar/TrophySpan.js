import styled from "styled-components";

const TrophySpan = styled.span`
  font-size: ${(props) =>
    props.ranking === "first"
      ? "2em"
      : props.ranking === "second"
      ? "1.5em"
      : "1em"};
  display: flex;
  align-items: center;
  justify-content: center;
  

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    margin-right: 5px;
    padding: 2px;
  }

  h1 {
    color: rgb(32, 195, 161) !important;
    font-family: "Poppins", sans-serif;
  }

  h2,
  h3 {
    font-family: "Poppins", sans-serif;
  }
`;

export default TrophySpan;
