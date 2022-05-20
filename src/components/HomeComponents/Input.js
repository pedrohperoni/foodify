import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  height: 50px;
  border-radius: 5px;
  background-color: var(--dark-gray);
  border: 0;
  color: var(--white);
  font-size: 0.9em;
  padding: 0 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 0 0.1em rgba(32, 195, 161, 1);

  &:focus {
    outline: none;
  }
  ::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: rgba(32, 195, 161, 1);
  }
`;

export default Input;
