import styled from "styled-components";

const CreateTagInput = styled.input`
  border: 0;
  background-color: transparent;
  color: var(--white);
  min-width: 10px;
  height: 100%;
  padding: 0 1px;
  font-size:1em;
  width: ${(props) => `${props.wordlength*8.5}px`};

  &:focus {
    outline: none;
  }
  ::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: var(--white);
  }
`;

export default CreateTagInput;
