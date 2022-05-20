import styled from "styled-components";

const Button = styled.button`
  min-width: 200px;
  height: 40px;
  border-radius: 5px;

  background-color: ${(props) =>
    props.color === "dark" ? "var(--black)" : "rgb(32, 195, 161)"};
  color: ${(props) =>
    props.color === "dark" ? "var(--white)" : "var(--black)"};
  border: 0;
  padding: 0 10px;
  margin-top: 13px;

  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: ${(props) => (props.color === "dark" ? "0.9em" : "1.2em")};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: var(--white);
  }

  svg {
    margin-right: 10px;
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
