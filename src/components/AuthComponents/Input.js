import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  height: 57px;
  border-radius: 5px;
  background-color: var(--dark-gray);
  border: 0;
  color: var(--white);
  font-size: 1em;
  padding: 0 20px;
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;


  &:focus {
    outline: none;
  }
  ::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: var(--light-gray);
  }
`;

export default Input;
